import { getCategoryByKeyName } from '@/services/getCategory';
import { prisma } from '@/composables/prisma';

// https://github.com/prisma/prisma/issues/4328
export const getAllWorkstationUses = async () => {
  const { category } = await getCategoryByKeyName('workstation');

  const unserialized = await prisma.use.findMany({
    where: { category_id: category.id },
  });

  const serialized = [...unserialized].map((unserialize) => ({
    ...unserialize,
    created_at: new Date(unserialize.created_at).toISOString(),
    updated_at: new Date(unserialize.updated_at).toISOString(),
  }));

  return {
    workstation: {
      category: category,
      uses: serialized,
    },
  };
};
