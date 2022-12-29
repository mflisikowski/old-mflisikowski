import { prisma } from '@/composables/prisma';

export const getAllSocials = async () => {
  const socials =
    (await prisma.social.findMany({
      select: {
        id: true,
        mailto: true,
        name: true,
        url: true,
      },
      orderBy: {
        name: 'asc',
      },
    })) || [];

  return {
    socials,
  };
};
