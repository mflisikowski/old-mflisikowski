import { prisma } from '@/composables/prisma';

export const getPage = async (routeId) => {
  const page = await prisma.page.findUnique({
    select: {
      subheading: true,
      heading: true,
      title: true,
      id: true,
    },
    where: {
      route_id: routeId,
    },
  });

  return {
    page,
  };
};
