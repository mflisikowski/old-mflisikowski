import { getDataByRoute } from '@/services/getDataByRoute';
import { getAllSocials } from '@/services/getAllSocials';
import { getAllRoutes } from '@/services/getAllRoutes';
import { getAllUses } from '@/services/getAllUses';

import { PageHead as Head, Layout } from '@/modules/Page';
import { ChevronRightIcon } from '@/icons/ChevronIcon';
import { Section } from '@/components/Section';
import { LinkIcon } from '@/icons/LinkIcon';

import Link from 'next/link';

const UsesLink = ({ children, ...props }) => (
  <>
    <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
    <Link {...props}>
      <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
      <span className="relative z-10">{children}</span>
    </Link>
  </>
);

const UsesTitle = ({ as: Component = 'h3', href, children }) => (
  <Component className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
    {href ? <UsesLink href={href}>{children}</UsesLink> : children}
  </Component>
);

export default function Uses({
  uses: { workstation, development, design, productivity },
  metas,
  page,
}) {
  return (
    <>
      <Head page={page} metas={metas} />

      <Layout page={page}>
        <div className="space-y-20">
          {[workstation, development, design, productivity].map(
            ({ id, name, uses }) => (
              <Section key={id} title={name}>
                <ul role="list" className="space-y-16">
                  {uses?.map(
                    ({ id, description, name, link, link_url, link_label }) => (
                      <li
                        className="group relative flex flex-col items-start"
                        key={id}
                      >
                        <UsesTitle href={link_url}>{name}</UsesTitle>

                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                          {description}
                        </p>

                        {link && (
                          <p
                            className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                            aria-hidden="true"
                          >
                            <LinkIcon className="inline-flex h-6 w-6" />
                            {link_label}
                            <ChevronRightIcon className="ml-1 inline-flex h-4 w-4 stroke-current" />
                          </p>
                        )}
                      </li>
                    )
                  )}
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
  const { uses } = await getAllUses();

  const { page, metas } = await getDataByRoute({
    resolvedUrl,
    routes,
  });

  return {
    props: {
      socials,
      routes,
      metas,
      page,
      uses,
    },
  };
};
