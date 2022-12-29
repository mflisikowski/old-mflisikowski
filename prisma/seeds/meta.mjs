import { prisma } from './prisma.mjs';
import logger from 'node-color-log';

async function seed() {
  const count = await prisma?.meta?.count();

  if (count && count > 0) {
    await prisma?.meta?.deleteMany();
  }

  await prisma?.meta?.createMany({
    data: [
      {
        id: '2e6da4e1-9b89-44b4-bea7-6837470d57ac',
        content: '',
        name: 'description',
      },
      {
        id: 'b44a2fec-d315-40dc-a472-fd8fe5a2318f',
        content: '',
        name: 'og:title',
      },
      {
        id: 'ab49260b-0108-4c41-a56b-7caed47129f7',
        content: '',
        name: 'og:site_name',
      },
      {
        id: 'c6105b32-ecf1-4d75-be6f-9bc2bf4e720b',
        content: '',
        name: 'og:description',
      },
      {
        id: 'f5f32731-3454-4239-8a79-cb3fdbca5e1f',
        content: '',
        name: 'og:type',
      },
      {
        id: '2631dbce-55bc-4b96-b270-59e3bfcdc668',
        content: '',
        name: 'og:url',
      },
      {
        id: 'fbe8326d-deca-4c93-983f-404f9c15c23a',
        content: '',
        name: 'og:image',
      },
    ],
  });
}

seed()
  .catch((e) => logger.error(e) && process.exit(1))
  .finally(async () => await prisma.$disconnect());
