// https://github.com/prisma/prisma/issues/6219#issuecomment-1200982341
import { PrismaClient } from '@prisma/client';

export let prisma;

if (typeof window === 'undefined') {
  if (process.env['NODE_ENV'] === 'production') {
    prisma = new PrismaClient({ errorFormat: 'pretty' });
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient({ errorFormat: 'pretty' });
    }
    prisma = global.prisma;
  }
}
