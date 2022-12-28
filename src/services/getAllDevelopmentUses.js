import { getCategoryByKeyName } from '@/services/getCategoryByKeyName';
import { serialize } from '@/utils/prisma-utils';
import { prisma } from '@/composables/prisma';

export const getAllDevelopmentUses = async () => {
  const { category } = await getCategoryByKeyName('development');

  const uses = serialize(
    await prisma.use.findMany({
      where: { category_id: category.id },
    })
  );

  return {
    development: {
      category: category,
      uses,
    },
  };
};
