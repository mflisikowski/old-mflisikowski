import { prisma } from '@/composables/prisma';

// https://github.com/prisma/prisma/issues/4328
export const getAllSocials = async () => {
  const unserialized = await prisma.social.findMany({});
  const serialized = [...unserialized].map((unserialize) => ({
    ...unserialize,
    created_at: new Date(unserialize.created_at).toISOString(),
    updated_at: new Date(unserialize.updated_at).toISOString(),
  }));

  return {
    socials: serialized,
  };
};
