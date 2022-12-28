import { getCategoryByKeyName } from '@/services/getCategoryByKeyName';
import { serialize } from '@/utils/prisma-utils';
import { prisma } from '@/composables/prisma';

export const getAllProductivityUses = async () => {
  const { category } = await getCategoryByKeyName('productivity');

  const uses = serialize(
    await prisma.use.findMany({
      where: { category_id: category.id },
    })
  );

  return {
    productivity: {
      category: category,
      uses,
    },
  };
};
