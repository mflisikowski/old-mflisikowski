import { PageHead as Head, Layout } from '@/components/Page';
import { getEmployee } from '@/services/getEmployee';

import { ChevronRightIcon } from '@/icons/ChevronIcon';
import { Section } from '@/components/Section';
import { LinkIcon } from '@/icons/LinkIcon';
import Link from 'next/link';

const UsesLink = ({ children, ...props }) => (
  <>
    <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl" />
    <Link {...props}>
      <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
      <span className="relative z-10">{children}</span>
    </Link>
  </>
);

const UsesTitle = ({ as: Component = 'h3', href, children }) => (
  <Component className="text-base font-semibold tracking-tight text-zinc-800 ">
    {href ? <UsesLink href={href}>{children}</UsesLink> : children}
  </Component>
);

export default function Uses({ employee, meta, page }) {
  return (
    <>
      <Head page={page} metas={meta} />

      <Layout page={page}>
        <div className="space-y-20">
          {employee?.use.map(({ category, items, id }) => (
            <Section key={id} title={category}>
              <ul role="list" className="space-y-16">
                {items?.map(
                  ({ id, description, name, link, link_url, link_label }) => (
                    <li
                      className="group relative flex flex-col items-start"
                      key={id}
                    >
                      <UsesTitle href={link_url}>{name}</UsesTitle>

                      <p className="relative z-10 mt-2 text-base font-light text-zinc-500">
                        {description}
                      </p>

                      {link && (
                        <p
                          className="relative z-10 mt-4 flex items-center text-base font-medium text-indigo-600"
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
          ))}
        </div>
      </Layout>
    </>
  );
}

export const getServerSideProps = async ({ resolvedUrl }) => {
  const employee_id = 'b84f66a6-7134-438e-8123-f27fe78f35ec';

  const { employee, relations } = await getEmployee({
    employee_id: employee_id,
    resolvedUrl,
    relations: {
      status: true,
      social: true,
      use: {
        select: {
          category: {
            select: {
              name: true,
            },
          },
          description: true,
          link_label: true,
          link_url: true,
          name: true,
          link: true,
          id: true,
        },
      },
      meta: {
        select: {
          content: true,
          name: true,
          id: true,
        },
      },
      route: {
        select: {
          hidden: true,
          label: true,
          href: true,
          id: true,
          page: {
            select: {
              title: true,
            },
          },
        },
      },
      page: {
        route: true,
      },
    },
  });

  return {
    props: {
      employee: {
        ...employee,
        use: relations?.use || [],
      },
      social: relations?.social || null,
      route: relations?.route || null,
      meta: relations?.meta || null,
      page: relations?.page || null,
    },
  };
};
