import { getCategoryByKeyName } from '@/services/getCategory';
import { serialize } from '@/utils/prisma-utils';
import { prisma } from '@/composables/prisma';

// https://github.com/prisma/prisma/issues/4328
export const getAllDesignUses = async () => {
  const { category } = await getCategoryByKeyName('design');
  const unserialized = await prisma.use.findMany({
    where: { category_id: category.id },
  });
  const serialized = serialize(unserialized);

  return {
    design: {
      category: category,
      uses: serialized,
    },
  };
};
