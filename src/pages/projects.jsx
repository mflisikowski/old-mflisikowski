import { Layout } from '@/components/Layout';
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
  return {
    props: {
      data: {
        page: {
          layout: {
            title: 'Things I’ve made.',
            intro:
              'I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.',
          },
          title: 'Projects - Mateusz Flisikowski',
          metas: [],
        },
      },
    },
  };
}
