import { serialize } from '@/utils/prisma-utils';
import { prisma } from '@/composables/prisma';

// https://github.com/prisma/prisma/issues/4328
export const getAllSocials = async () => {
  const unserialized = await prisma.social.findMany({});
  const serialized = serialize(unserialized);

  return {
    socials: serialized,
  };
};
