import { Layout } from '@/components/Layout';
import { Intro } from '@/modules/Intro';
import Head from 'next/head';

export default function Uses({
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
            title:
              'Software I use, gadgets I love, and other things I recommend.',
            intro:
              'I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff.',
          },
          title: 'Uses - Mateusz Flisikowski',
          metas: [],
        },
      },
    },
  };
}
