import { getCategoryByKeyName } from '@/services/getCategoryByKeyName';
import { serialize } from '@/utils/prisma-utils';
import { prisma } from '@/composables/prisma';

export const getAllDesignUses = async () => {
  const { category } = await getCategoryByKeyName('design');

  const uses = serialize(
    await prisma.use.findMany({
      where: { category_id: category.id },
    })
  );

  return {
    design: {
      category: category,
      uses,
    },
  };
};
