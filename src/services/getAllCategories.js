import { prisma } from '@/composables/prisma';

// https://github.com/prisma/prisma/issues/4328
export const getAllCategories = async () => {
  const categories = await prisma.categories.findMany({});

  return {
    categories,
  };
};
