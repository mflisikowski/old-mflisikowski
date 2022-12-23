import { PrismaClient } from '@prisma/client';
import logger from 'node-color-log';

export const prisma = new PrismaClient();

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
