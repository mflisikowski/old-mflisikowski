import { PrismaClient } from '@prisma/client';
import logger from 'node-color-log';

export const prisma = new PrismaClient({ errorFormat: 'pretty' });

prisma.$use(async (params, next) => {
  const before = Date.now();
  const result = await next(params);
  const after = Date.now();

  logger.info(
    `Prisma Query Details: ${params.action} on ${params.model} model took a ${
      after - before
    }ms`
  );

  return result;
});
