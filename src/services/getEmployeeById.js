import { serialize } from '@/utils/prisma-utils';
import { prisma } from '@/composables/prisma';

export const getEmployeeById = async (employeeId) => {
  const employee = serialize(
    await prisma.employee.findUnique({
      where: {
        id: employeeId,
      },
    })
  );

  return {
    employee,
  };
};
