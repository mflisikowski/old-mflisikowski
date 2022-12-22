import { PrismaClient } from '@prisma/client';
import logger from 'node-color-log';
import data from './seeds';

const prisma = new PrismaClient();

prisma.$use(async (params, next) => {
  const before = Date.now();
  const result = await next(params);
  const after = Date.now();

  logger.debug(
    `Prisma Query Details: ${params.action} on ${params.model} model took a ${
      after - before
    }ms`
  );

  return result;
});

async function main() {
  const categoriesCount = await prisma.categories.count();
  const usesCount = await prisma.uses.count();

  if (usesCount > 0) await prisma.uses.deleteMany();
  if (categoriesCount > 0) await prisma.categories.deleteMany();

  if (data.categories.length > 0) {
    await prisma.categories.createMany({
      data: data.categories,
    });
  }

  if (data.uses.length > 0) {
    await prisma.uses.createMany({
      data: data.uses,
    });
  }
}

main()
  .catch((e) => logger.error(e) && process.exit(1))
  .finally(async () => await prisma.$disconnect());
