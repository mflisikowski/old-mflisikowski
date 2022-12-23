import { getCategoryByKeyName } from '@/services/getCategory';
import { prisma } from '@/composables/prisma';

// https://github.com/prisma/prisma/issues/4328
export const getAllProductivityUses = async () => {
  const { category } = await getCategoryByKeyName('productivity');

  const unserialized = await prisma.use.findMany({
    where: { category_id: category.id },
  });

  const serialized = [...unserialized].map((unserialize) => ({
    ...unserialize,
    created_at: new Date(unserialize.created_at).toISOString(),
  }));

  return {
    productivity: {
      category: category,
      uses: serialized,
    },
  };
};
