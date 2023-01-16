import { PrismaClient, Prisma } from '@prisma/client';
import backup from '@vorlefan/prisma-backup';
const prisma = new PrismaClient();

(async function () {
  const transactions = await prisma.$transaction(() => {
    const datamodels = Prisma?.dmmf?.datamodel?.models?.map(
      (model) => model?.name
    );

    return Promise.all(
      datamodels?.map(async (model) => {
        const data = await prisma?.[model]?.findMany();
        const name = model?.toLowerCase();
        return { name, data };
      })
    );
  });

  const models = transactions.reduce((models, { name, data }) => {
    models[name] = data;
    return models;
  }, {});

  await backup.runBackup({
    // password: process.env.PRISMA_BACKUP_PASSWORD,
    backupFolderName: new Date().toISOString(),
    folder: './prisma/backups',
    // encrypt: true,
    models,
  });
})();
