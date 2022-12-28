import { serialize } from '@/utils/prisma-utils';
import { prisma } from '@/composables/prisma';

export const getAllRoutes = async () => {
  const routes = serialize(await prisma.route.findMany());

  return {
    routes,
  };
};
