import configuration from 'website-config';

import { Layout } from '@/modules/Layout';
import { Intro } from '@/modules/Intro';

import Head from 'next/head';

export default function Projects({
  data: {
    page: { layout, title, metas },
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
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const { projects } = configuration?.pages;
  const { layout, metas, title } = projects;

  return {
    props: {
      data: {
        page: {
          layout,
          title,
          metas,
        },
      },
    },
  };
}
