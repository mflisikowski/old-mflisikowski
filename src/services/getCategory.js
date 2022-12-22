import { prisma } from '@/composables/prisma';

// https://github.com/prisma/prisma/issues/4328
export const getCategory = async (key) => {
  const unserialized = await prisma.categories.findFirst({
    where: { key: key },
  });

  const serialized = {
    ...unserialized,
    created_at: new Date(unserialized.created_at).toISOString(),
  };

  return {
    category: serialized,
  };
};
