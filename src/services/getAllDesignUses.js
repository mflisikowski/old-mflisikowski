import { getCategoryByKeyName } from '@/services/getCategory';
import { prisma } from '@/composables/prisma';

// https://github.com/prisma/prisma/issues/4328
export const getAllDesignUses = async () => {
  const { category } = await getCategoryByKeyName('design');

  const unserialized = await prisma.use.findMany({
    where: { category_id: category.id },
  });

  const serialized = [...unserialized].map((unserialize) => ({
    ...unserialize,
    created_at: new Date(unserialize.created_at).toISOString(),
    updated_at: new Date(unserialize.updated_at).toISOString(),
  }));

  return {
    design: {
      category: category,
      uses: serialized,
    },
  };
};
