import { productivity } from './use-productivity.mjs';
import { development } from './use-development.mjs';
import { workstation } from './use-workstation.mjs';
import { design } from './use-design.mjs';
import { prisma } from './prisma.mjs';
import logger from 'node-color-log';

async function seed() {
  const count = await prisma?.use?.count();

  if (count && count > 0) {
    await prisma?.use?.deleteMany();
  }

  await prisma?.use?.createMany({
    data: [...workstation, ...development, ...design, ...productivity],
  });
}

// eslint-disable-next-line react-hooks/rules-of-hooks
seed()
  .catch((e) => logger.error(e) && process.exit(1))
  .finally(async () => await prisma.$disconnect());
