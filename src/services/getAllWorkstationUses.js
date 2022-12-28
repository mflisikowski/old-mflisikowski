import { getCategoryByKeyName } from '@/services/getCategoryByKeyName';
import { serialize } from '@/utils/prisma-utils';
import { prisma } from '@/composables/prisma';

export const getAllWorkstationUses = async () => {
  const { category } = await getCategoryByKeyName('workstation');

  const uses = serialize(
    await prisma.use.findMany({
      where: { category_id: category.id },
    })
  );

  return {
    workstation: {
      category: category,
      uses,
    },
  };
};
