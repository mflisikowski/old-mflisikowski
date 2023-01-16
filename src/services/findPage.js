import { prisma } from '@/composables/prisma';
import { Utils } from '@/utils';

export const findPage = async ({ employee_id, route_id, filters = {} }) => {
  try {
    const isValidEmployee = Utils.Validators.isUUID(employee_id);
    const isValidRoute = Utils.Validators.isUUID(route_id);

    if (!isValidEmployee) {
      throw new Error('Error occurred while validate employee id');
    }

    if (!isValidRoute) {
      throw new Error('Error occurred while validate route id');
    }

    const page = await prisma?.page?.findFirst({
      ...filters,
      where: {
        ...filters?.where,
        employee_id: employee_id,
        route_id: route_id,
      },
    });

    return Utils.Objects.serialize(page);
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};
