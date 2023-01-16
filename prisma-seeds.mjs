import logger from 'node-color-log';
import spawn from 'await-spawn';
import path from 'path';
import fs from 'fs';

const delay = (t, val) => new Promise((resolve) => setTimeout(resolve, t, val));

async function install() {
  const executeSeeds = async () => {
    const packagePath = path.join(process.cwd(), 'package.json');
    const packageFile = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    const scripts = packageFile.scripts;

    const filteredScripts = Object.keys(scripts)
      .filter((script) => script.includes('prisma:seed:'))
      .map((script) => scripts[script]);

    for (const scriptt of filteredScripts) {
      const [node_prisma, seed, file] = scriptt.split('/');
      const [, prisma] = node_prisma.split(' ');
      const [script] = file.split('.');

      try {
        const task = await spawn('yarn', [`${prisma}:${seed}:${script}`]);
        logger.debug(task.toString());
        await delay(2000);
      } catch (error) {
        logger.error(error.stderr.toString());
      }
    }
  };

  executeSeeds();
}

install();

// import { PrismaClient, Prisma } from '@prisma/client';
// import { getNewestSeed } from './prisma/seed/index.mjs';
// const prisma = new PrismaClient();

// (async function () {
//   await prisma.$transaction(async () => {
//     const datamodels = Prisma?.dmmf?.datamodel?.models?.map(
//       (model) => model?.name
//     );

//     for (const model of datamodels) {
//       const name = model.toLowerCase();
//       const data = await getNewestSeed('prisma/backups', `${name}.json`);
//       // await prisma?.[name]?.createMany({ data });
//       // console.log(name, data);
//     }
//   });
// })();
