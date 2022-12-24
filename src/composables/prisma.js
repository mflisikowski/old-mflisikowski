// https://www.prisma.io/docs/guides/database/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({
  errorFormat: 'pretty',
});
