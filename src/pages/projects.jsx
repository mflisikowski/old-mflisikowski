import configuration from 'website-config';

import { ChevronRightIcon } from '@/icons/ChevronIcon';
import { Section } from '@/components/Section';
import { LinkIcon } from '@/icons/LinkIcon';
import { Layout } from '@/modules/Layout';

import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

export default function Projects({
  data: {
    projects: { websites, opensource },
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

      <Layout title={layout.title} intro={layout.intro}>
        <div className="space-y-16">
          {[websites, opensource].map(
            ({ id, title, projects }) =>
              projects.length > 0 && (
                <Section key={id} title={title}>
                  <ul role="list" className="space-y-16">
                    {projects.map(({ description, title, logo, link }) => (
                      <li key={title} title={title}>
                        <div className="relative z-10 float-left mr-4 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                          <div className="relative h-5 w-5">
                            <Image unoptimized src={logo} alt="" fill />
                          </div>
                        </div>

                        <h3 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                          {title}
                        </h3>
                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                          {description}
                        </p>
                        <p
                          className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                          aria-hidden="true"
                        >
                          <Link href={link?.url}>
                            <LinkIcon className="inline-flex h-6 w-6" />
                            {link?.label}
                            <ChevronRightIcon className="ml-1 inline-flex h-4 w-4 stroke-current" />
                          </Link>
                        </p>
                      </li>
                    ))}
                  </ul>
                </Section>
              )
          )}
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const { layout, metas, title } = configuration?.pages?.projects;
  const { socials, projects } = configuration;

  return {
    props: {
      data: {
        page: {
          layout,
          title,
          metas,
        },
        projects,
        socials,
      },
    },
  };
}
