import { prisma } from './prisma.mjs';
import logger from 'node-color-log';

async function seed() {
  const count = await prisma?.social?.count();

  if (count && count > 0) {
    await prisma?.social?.deleteMany();
  }

  await prisma?.social?.createMany({
    data: [],
  });
}

// name   String
// url    String
// mailto String?

seed()
  .catch((e) => logger.error(e) && process.exit(1))
  .finally(async () => await prisma.$disconnect());
