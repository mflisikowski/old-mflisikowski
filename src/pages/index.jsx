import { getDataByRoute } from '@/services/getDataByRoute';
import { getAllWorkspaces } from '@/services/getAllWorkspaces';
import { getAllSocials } from '@/services/getAllSocials';
import { getAllRoutes } from '@/services/getAllRoutes';

import { PageHead as Head, Layout } from '@/modules/Page';
import { PortraitImage } from '@/modules/PortraitImage';
import { Workspaces } from '@/modules/Workplaces';

export default function Home({ workplaces, metas, page }) {
  return (
    <>
      <Head page={page} metas={metas} />

      <Layout page={page}>
        <div className="grid grid-rows-[auto_1fr] gap-y-16 lg:gap-y-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-y-12">
            <PortraitImage src="https://ucarecdn.com/2ff13d60-3bb1-4a6e-be58-ea0c8986a3e3/" />
            <Workspaces className="lg:order-first" workplaces={workplaces} />
          </div>
        </div>
      </Layout>
    </>
  );
}

export const getServerSideProps = async ({ resolvedUrl }) => {
  const { workplaces } = await getAllWorkspaces();
  const { socials } = await getAllSocials();
  const { routes } = await getAllRoutes();

  const { metas, page } = await getDataByRoute({
    resolvedUrl,
    routes,
  });

  return {
    props: {
      workplaces,
      socials,
      routes,
      metas,
      page,
    },
  };
};
