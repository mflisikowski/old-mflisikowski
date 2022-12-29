import { productivity } from './use-productivity.mjs';
import { development } from './use-development.mjs';
import { workstation } from './use-workstation.mjs';
import { design } from './use-design.mjs';
import { prisma } from './prisma.mjs';
import logger from 'node-color-log';

async function seed() {
  const count = await prisma?.use?.count();

  if (count && count > 0) await prisma?.use?.deleteMany();

  const data = [...workstation, ...development, ...design, ...productivity];

  try {
    await prisma?.use?.createMany({ data });
  } catch (error) {
    logger.error(error.message);
  }
}

seed().finally(async () => await prisma.$disconnect());
