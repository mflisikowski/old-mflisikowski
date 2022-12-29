import { getDataByRoute } from '@/services/getDataByRoute';
import { getAllWorkspaces } from '@/services/getAllWorkspaces';
import { getAllSocials } from '@/services/getAllSocials';
import { getAllRoutes } from '@/services/getAllRoutes';

import { PageHead as Head, Layout } from '@/modules/Page';

export default function CV({ data: { page, metas } }) {
  return (
    <>
      <Head page={page} metas={metas} />
      <Layout page={page}>CV Page</Layout>
    </>
  );
}

export const getServerSideProps = async ({ resolvedUrl }) => {
  const { workplaces } = await getAllWorkspaces();
  const { socials } = await getAllSocials();
  const { routes } = await getAllRoutes();

  const { page, metas } = await getDataByRoute({
    resolvedUrl,
    routes,
  });

  return {
    props: {
      data: {
        workplaces,
        socials,
        routes,
        metas,
        page,
      },
    },
  };
};
