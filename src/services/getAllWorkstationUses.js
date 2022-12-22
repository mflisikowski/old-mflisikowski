import { getCategory } from '@/services/getCategory';
import { prisma } from '@/composables/prisma';

// https://github.com/prisma/prisma/issues/4328
export const getAllWorkstationUses = async () => {
  const { category } = await getCategory('workstation');

  const unserialized = await prisma.uses.findMany({
    where: { category_id: category.id },
  });

  const serialized = [...unserialized].map((unserialize) => ({
    ...unserialize,
    created_at: new Date(unserialize.created_at).toISOString(),
  }));

  return {
    workstation_category: category,
    workstation_uses: serialized,
  };
};
