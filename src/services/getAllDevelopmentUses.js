import { getCategory } from '@/services/getCategory';
import { prisma } from '@/composables/prisma';

// https://github.com/prisma/prisma/issues/4328
export const getAllDevelopmentUses = async () => {
  const { category } = await getCategory('development');

  const unserialized = await prisma.uses.findMany({
    where: { category_id: category.id },
  });

  const serialized = [...unserialized].map((unserialize) => ({
    ...unserialize,
    created_at: new Date(unserialize.created_at).toISOString(),
  }));

  return {
    development_category: category,
    development_uses: serialized,
  };
};
