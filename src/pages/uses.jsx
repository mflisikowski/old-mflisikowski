import configuration from 'website-config';

import { ChevronRightIcon } from '@/icons/ChevronIcon';
import { Section } from '@/components/Section';
import { LinkIcon } from '@/icons/LinkIcon';
import { Layout } from '@/modules/Layout';

import Head from 'next/head';
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
  data: {
    uses: { workstation, development, design, productivity },
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
        <div className="space-y-20">
          {[workstation, development, design, productivity].map(
            ({ id, title, uses }) => (
              <Section key={id} title={title}>
                <ul role="list" className="space-y-16">
                  {uses.map(({ description, title, link }) => (
                    <li
                      className="group relative flex flex-col items-start"
                      key={title}
                    >
                      <UsesTitle href={link?.url}>{title}</UsesTitle>

                      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        {description}
                      </p>

                      {link?.label && link?.url && (
                        <p
                          className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                          aria-hidden="true"
                        >
                          <LinkIcon className="inline-flex h-6 w-6" />
                          {link?.label}
                          <ChevronRightIcon className="ml-1 inline-flex h-4 w-4 stroke-current" />
                        </p>
                      )}
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
  const { layout, metas, title } = configuration?.pages?.uses;
  const { socials, uses } = configuration;

  return {
    props: {
      data: {
        page: {
          layout,
          title,
          metas,
        },
        socials,
        uses,
      },
    },
  };
}
