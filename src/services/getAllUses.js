import { getAllProductivityUses } from '@/services/getAllProductivityUses';
import { getAllWorkstationUses } from '@/services/getAllWorkstationUses';
import { getAllDevelopmentUses } from '@/services/getAllDevelopmentUses';
import { getAllDesignUses } from '@/services/getAllDesignUses';

export const getAllUses = async () => {
  const productivity = await getAllProductivityUses();
  const workstation = await getAllWorkstationUses();
  const development = await getAllDevelopmentUses();
  const design = await getAllDesignUses();

  const { productivity_uses, productivity_category } = productivity;
  const { workstation_uses, workstation_category } = workstation;
  const { development_uses, development_category } = development;
  const { design_uses, design_category } = design;

  return {
    uses: {
      workstation: {
        name: workstation_category.name,
        uses: workstation_uses,
        id: workstation_category.id,
      },
      development: {
        name: development_category.name,
        uses: development_uses,
        id: development_category.id,
      },
      design: {
        name: design_category.name,
        uses: design_uses,
        id: design_category.id,
      },
      productivity: {
        name: productivity_category.name,
        uses: productivity_uses,
        id: productivity_category.id,
      },
    },
  };
};
