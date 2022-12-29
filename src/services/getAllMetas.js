import { serialize } from '@/utils/prisma-utils';
import { prisma } from '@/composables/prisma';

export const getAllMetas = async () => {
  const metas = serialize(await prisma.route.findMany());

  return {
    metas,
  };
};
