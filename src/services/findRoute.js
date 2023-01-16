import { prisma } from '@/composables/prisma';
import { Utils } from '@/utils';

export const findRoute = async ({ employee_id, resolvedUrl }) => {
  try {
    const isValidEmployeeId = Utils.Validators.isUUID(employee_id);

    if (!isValidEmployeeId) {
      throw new Error('Error occurred while validate employee_id');
    }

    const data = await prisma.route.findFirst({
      where: {
        employee_id: employee_id,
        href: resolvedUrl,
      },
      select: {
        id: true,
      },
    });

    return Utils.Objects.serialize(data);
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};
