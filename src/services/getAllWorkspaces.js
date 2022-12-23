import { serialize } from '@/utils/prisma-utils';
import { prisma } from '@/composables/prisma';

// https://github.com/prisma/prisma/issues/4328
export const getAllWorkspaces = async () => {
  const workplaces = serialize(
    await prisma.workplace.findMany({
      include: {
        company: {
          select: {
            logotype: true,
            name: true,
          },
        },
      },
    })
  );

  return {
    workplaces,
  };
};
