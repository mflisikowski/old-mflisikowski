import { getCategoryByKeyName } from '@/services/getCategory';
import { serialize } from '@/utils/prisma-utils';
import { prisma } from '@/composables/prisma';

// https://github.com/prisma/prisma/issues/4328
export const getAllDevelopmentUses = async () => {
  const { category } = await getCategoryByKeyName('development');
  const unserialized = await prisma.use.findMany({
    where: { category_id: category.id },
  });
  const serialized = serialize(unserialized);

  return {
    development: {
      category: category,
      uses: serialized,
    },
  };
};
