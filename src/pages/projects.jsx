import { Layout } from '@/components/Layout';
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
            <h1 className="max-w-xl text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {layout.title}
            </h1>
            <div className="mt-6 max-w-xl space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>{layout.intro}</p>
            </div>
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
