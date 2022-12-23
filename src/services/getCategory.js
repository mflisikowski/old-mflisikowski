import { prisma } from '@/composables/prisma';

// https://github.com/prisma/prisma/issues/4328
export const getCategoryByKeyName = async (key) => {
  const unserialized = await prisma.category.findFirst({
    where: { key: key },
  });

  const serialized = {
    ...unserialized,
    created_at: new Date(unserialized.created_at).toISOString(),
    updated_at: new Date(unserialized.updated_at).toISOString(),
  };

  return {
    category: serialized,
  };
};
