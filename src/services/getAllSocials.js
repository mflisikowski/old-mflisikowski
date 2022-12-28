import { serialize } from '@/utils/prisma-utils';
import { prisma } from '@/composables/prisma';

// https://github.com/prisma/prisma/issues/4328
export const getAllSocials = async () => {
  const socials = serialize(
    await prisma.social.findMany({
      orderBy: {
        name: 'asc',
      },
    })
  );

  return {
    socials,
  };
};
