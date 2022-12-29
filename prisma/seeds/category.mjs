import { prisma } from './prisma.mjs';
import logger from 'node-color-log';

async function seed() {
  const count = await prisma?.category?.count();

  if (count && count > 0) await prisma?.category?.deleteMany();

  const data = [
    {
      id: '062960f8-933e-492a-8a01-7181361b0f3d',
      name: 'Workstation',
      key: 'workstation',
    },
    {
      id: '71700072-267e-47a6-bb41-a8b341c48686',
      name: 'Development Tools',
      key: 'development',
    },
    {
      id: 'c83b6c11-d430-46a8-bccf-facb96edb281',
      name: 'Design',
      key: 'design',
    },
    {
      id: '55575323-ee19-4d66-a39f-fc9a7b388d06',
      name: 'Productivity',
      key: 'productivity',
    },
  ];

  try {
    await prisma?.category?.createMany({ data });
  } catch (error) {
    logger.error(error.message);
  }
}

seed().finally(async () => await prisma.$disconnect());
