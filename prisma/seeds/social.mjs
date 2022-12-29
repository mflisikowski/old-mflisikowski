import { prisma } from './prisma.mjs';
import logger from 'node-color-log';

async function seed() {
  const count = await prisma?.social?.count();

  if (count && count > 0) await prisma?.social?.deleteMany();

  const data = [
    {
      name: 'Github',
      url: 'https://github.com/mflisikowski/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/mflisikowski/',
    },
  ];

  try {
    await prisma?.social?.createMany({ data });
  } catch (error) {
    logger.error(error.message);
  }
}

seed().finally(async () => await prisma.$disconnect());
