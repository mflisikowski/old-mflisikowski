import configuration from 'website-config';

import { PortraitImage } from '@/modules/PortraitImage';
import { Workspaces } from '@/modules/Workplaces';
import { Layout } from '@/modules/Layout';
import { Intro } from '@/modules/Intro';

import Head from 'next/head';

export default function Home({
  data: {
    page: { workplaces, layout, title, metas },
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
            <Workspaces
              className="lg:order-first"
              workplaces={workplaces}
            ></Workspaces>
          </div>
        </div>
      </Layout>
    </>
  );
}

export function getStaticProps() {
  const { layout, metas, title } = configuration?.pages?.home;
  const { workplaces, socials } = configuration;

  return {
    props: {
      data: {
        page: {
          layout,
          title,
          metas,
          workplaces,
          socials,
        },
      },
    },
  };
}
