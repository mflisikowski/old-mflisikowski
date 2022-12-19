import { Layout } from '@/components/Layout';
import Head from 'next/head';

export default function Home({
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
            title: 'Hello I’m Mateusz Flisikowski',
            intro:
              'I’m a Design-oriented Front-end Developer passionate about modern technologies specializing in responsive web design, modern CSS, Javascript and accessibility. I work with my clients to create interfaces and design systems that work for everyone.',
          },
          title: 'Mateusz Flisikowski',
          metas: [],
        },
      },
    },
  };
}
