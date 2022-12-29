import { getAllMetas } from './getAllMetas';
import { getPage } from './getPage';

export const getDataByRoute = async ({ routes, resolvedUrl }) => {
  const route = routes.filter((r) => r?.href === resolvedUrl)[0] || null;

  if (route?.href !== resolvedUrl) {
    return {
      metas: [],
      page: {},
    };
  }

  const { metas } = await getAllMetas();
  const { page } = await getPage(route?.id);

  return {
    metas,
    page,
  };
};
