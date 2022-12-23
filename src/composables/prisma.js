// https://www.prisma.io/docs/guides/database/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global;

export const prisma =
  globalForPrisma.prisma || new PrismaClient({ errorFormat: 'pretty' });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
