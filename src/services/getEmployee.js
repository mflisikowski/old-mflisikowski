import { findRoute } from '@/services/findRoute';
import { findPage } from '@/services/findPage';
import { prisma } from '@/composables/prisma';
import { Utils } from '@/utils';

export const getEmployee = async ({
  employee_id,
  resolvedUrl,
  relations = {},
}) => {
  try {
    const employee = await Utils.Relations.getData({
      relation: 'employee',
      method: 'findUnique',
      filters: {
        where: {
          id: employee_id,
        },
      },
    });

    const result = {
      relations: {},
      employee,
    };

    for (const relation of ['availability', 'relocation', 'setting']) {
      if (relation in relations) {
        const filters = Utils.Relations.getFilters({ relations, relation });

        result.relations[relation] = await prisma?.[relation]?.findFirst({
          ...filters,
        });
      }
    }

    for (const relation of ['social', 'skill', 'status', 'meta', 'route']) {
      if (relation in relations) {
        const filters = Utils.Relations.getFilters({ relations, relation });

        result.relations[relation] = await prisma?.[relation]?.findMany(
          filters
        );
      }
    }

    if ('workplace' in relations) {
      const filters = Utils.Relations.getFilters({
        relation: 'workplace',
        relations,
      });

      const workplace = await prisma?.workplace?.findMany(filters);
      const experience = Utils.Calculates.experience(workplace);

      result.relations.experience = experience;
      result.relations.workplace = workplace;
    }

    if ('use' in relations) {
      const filters = Utils.Relations.getFilters({
        relation: 'use',
        relations,
      });

      const useRawData = await prisma?.use?.findMany(filters);
      const grouped = Utils.Arrays.groupByCategory(useRawData);

      result.relations.use = grouped;
    }

    if ('page' in relations) {
      const filters = Utils.Relations.getFilters({
        relation: 'page',
        relations,
      });

      const { id } = await findRoute({ employee_id, resolvedUrl });
      const page = await findPage({ employee_id, route_id: id, filters });

      result.relations.page = page;
    }

    return Utils.Objects.serialize(result);
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};
