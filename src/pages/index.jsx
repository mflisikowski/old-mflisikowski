import configuration from 'website-config';

import { getAllWorkspaces } from '@/services/getAllWorkspaces';
import { getAllSocials } from '@/services/getAllSocials';

import { PortraitImage } from '@/modules/PortraitImage';
import { Workspaces } from '@/modules/Workplaces';
import { Layout } from '@/modules/Layout';
import { Intro } from '@/modules/Intro';

import Head from 'next/head';

export default function Home({
  data: {
    page: { layout, title, metas },
    workplaces,
  },
}) {
  return (
    <>
      <Head>
        <title>{title}</title>

        {metas.map(({ name, content }) => (
          <meta key={name} name={name} content={content} />
        ))}
      </Head>

      <Layout>
        <div className="grid grid-rows-[auto_1fr] gap-y-16 lg:gap-y-12">
          <div className=" lg:row-span-2">
            <Intro title={layout.title} intro={layout.intro} />
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-y-12">
            <PortraitImage
              visibilityRegions={layout.image.visibilityRegions}
              src={layout.image.src}
            />

            <Workspaces className="lg:order-first" workplaces={workplaces} />
          </div>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const { layout, metas, title } = configuration?.pages?.home;
  const { workplaces } = await getAllWorkspaces();
  const { socials } = await getAllSocials();

  return {
    props: {
      data: {
        page: {
          layout,
          title,
          metas,
        },
        workplaces,
        socials,
      },
    },
  };
};
