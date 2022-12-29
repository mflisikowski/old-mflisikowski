import { getDataByRoute } from '@/services/getDataByRoute';
import { getAllSocials } from '@/services/getAllSocials';
import { getAllRoutes } from '@/services/getAllRoutes';

import { PageHead as Head, Layout } from '@/modules/Page';
import { ChevronRightIcon } from '@/icons/ChevronIcon';
import { Section } from '@/components/Section';
import { LinkIcon } from '@/icons/LinkIcon';

import Image from 'next/image';
import Link from 'next/link';

export default function Projects({ data: { projects, metas, page } }) {
  return (
    <>
      <Head page={page} metas={metas} />

      <Layout page={page}>
        <div className="space-y-16">
          {projects.map(
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

export const getServerSideProps = async ({ resolvedUrl }) => {
  const { socials } = await getAllSocials();
  const { routes } = await getAllRoutes();

  const { page, metas } = await getDataByRoute({
    resolvedUrl,
    routes,
  });

  return {
    props: {
      data: {
        projects: [],
        socials,
        routes,
        metas,
        page,
      },
    },
  };
};
