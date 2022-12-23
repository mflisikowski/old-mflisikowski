import { prisma } from '@/composables/prisma';

// https://github.com/prisma/prisma/issues/4328
export const getAllWorkspaces = async () => {
  const unserialized = await prisma.workplace.findMany({});
  const serialized = [...unserialized].map((unserialize) => ({
    ...unserialize,
    created_at: new Date(unserialize.created_at).toISOString(),
    updated_at: new Date(unserialize.updated_at).toISOString(),
  }));

  return {
    workplaces: serialized,
  };
};
