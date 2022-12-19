import Head from 'next/head';

import { Workspaces } from '@/modules/Workplaces';
import { Layout } from '@/components/Layout';

import PIC_SVG from '@/images/logotypes/placeholder.svg';
import MFD_SVG from '@/images/logotypes/mfd.svg';
import ENP_SVG from '@/images/logotypes/enp.svg';
import WP_SVG from '@/images/logotypes/wp.svg';

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
            <h1 className="max-w-xl text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {layout.title}
            </h1>
            <div className="mt-6 max-w-xl space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>{layout.intro}</p>
            </div>
          </div>

          <Workspaces workplaces={workplaces}></Workspaces>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const workplaces = [
    {
      id: '1',
      company: 'Mateusz Flisikowski Development',
      title: 'Owner',
      logo: MFD_SVG,
      start: '2019',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      id: '2',
      company: 'E NET PRODUCTION sp. z o.o.',
      title: 'Front-end Developer',
      logo: ENP_SVG,
      start: '2019',
      end: '2022',
    },
    {
      id: '3',
      company: 'Wirtualna Polska Media Sp. z o.o',
      title: 'Front-end Developer',
      logo: WP_SVG,
      start: '2015',
      end: '2019',
    },
    {
      id: '4',
      company: 'Nord Systems Sp. z o.o.',
      title: 'Front-end Developer',
      logo: PIC_SVG,
      start: '2014',
      end: '2015',
    },
    {
      id: '5',
      company: 'Not related ',
      title: 'to the IT industry',
      logo: PIC_SVG,
      start: '2006',
      end: '2014',
    },
    {
      id: '6',
      company: 'Interbit Sp. z o.o',
      title: 'Junior Webmaster',
      logo: PIC_SVG,
      start: '2006',
      end: '2006',
    },
  ];

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
        workplaces,
      },
    },
  };
}
