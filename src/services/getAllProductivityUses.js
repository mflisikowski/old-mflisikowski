import { getCategory } from '@/services/getCategory';
import { prisma } from '@/composables/prisma';

// https://github.com/prisma/prisma/issues/4328
export const getAllProductivityUses = async () => {
  const { category } = await getCategory('productivity');

  const unserialized = await prisma.uses.findMany({
    where: { category_id: category.id },
  });

  const serialized = [...unserialized].map((unserialize) => ({
    ...unserialize,
    created_at: new Date(unserialize.created_at).toISOString(),
  }));

  return {
    productivity_category: category,
    productivity_uses: serialized,
  };
};
