import { getCategory } from '@/services/getCategory';
import { prisma } from '@/composables/prisma';

// https://github.com/prisma/prisma/issues/4328
export const getAllDesignUses = async () => {
  const { category } = await getCategory('design');

  const unserialized = await prisma.uses.findMany({
    where: { category_id: category.id },
  });

  const serialized = [...unserialized].map((unserialize) => ({
    ...unserialize,
    created_at: new Date(unserialize.created_at).toISOString(),
  }));

  return {
    design_category: category,
    design_uses: serialized,
  };
};
