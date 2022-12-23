import { serialize } from '@/utils/prisma-utils';
import { prisma } from '@/composables/prisma';

// https://github.com/prisma/prisma/issues/4328
export const getCategoryByKeyName = async (key) => {
  const category = serialize(
    await prisma.category.findFirst({
      where: { key: key },
    })
  );

  return {
    category,
  };
};
