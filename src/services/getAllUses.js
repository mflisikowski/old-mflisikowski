import { getAllProductivityUses } from '@/services/getAllProductivityUses';
import { getAllWorkstationUses } from '@/services/getAllWorkstationUses';
import { getAllDevelopmentUses } from '@/services/getAllDevelopmentUses';
import { getAllDesignUses } from '@/services/getAllDesignUses';

export const getAllUses = async () => {
  const { productivity } = await getAllProductivityUses();
  const { workstation } = await getAllWorkstationUses();
  const { development } = await getAllDevelopmentUses();
  const { design } = await getAllDesignUses();

  return {
    uses: {
      workstation: {
        name: workstation.category.name,
        uses: workstation.uses,
        id: workstation.category.id,
      },
      development: {
        name: development.category.name,
        uses: development.uses,
        id: development.category.id,
      },
      design: {
        name: design.category.name,
        uses: design.uses,
        id: design.category.id,
      },
      productivity: {
        name: productivity.category.name,
        uses: productivity.uses,
        id: productivity.category.id,
      },
    },
  };
};
