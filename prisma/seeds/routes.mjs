import { prisma } from './prisma.mjs';
import logger from 'node-color-log';

async function seed() {
  const count = await prisma?.route?.count();

  if (count && count > 0) {
    await prisma?.route?.deleteMany();
  }

  await prisma?.route?.createMany({
    data: [
      {
        id: 'ee02fe20-a6c4-462b-86f8-909659704bc7',
        label: 'Projects',
        href: '/projects',
        hidden: false,
      },
      {
        id: '767221cf-ef3f-4c34-adaf-b3f021e8cf39',
        label: 'CV',
        href: '/cv',
        hidden: false,
      },
      {
        id: '50c7119d-0a16-4216-ad6f-b69a66eb0de8',
        label: 'Uses',
        href: '/uses',
        hidden: false,
      },
      {
        id: '09d2a3f0-e71b-4f8b-84a8-cafc6b4897b6',
        label: 'Home',
        href: '/',
        hidden: true,
      },
    ],
  });
}

seed()
  .catch((e) => logger.error(e) && process.exit(1))
  .finally(async () => await prisma.$disconnect());
