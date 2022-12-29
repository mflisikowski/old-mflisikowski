import { Container } from '@/modules/Container';
import Head from 'next/head';

export function LayoutNotFound({ children }) {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  );
}

export function Layout({ page, children }) {
  return (
    <Container className="mt-16 sm:mt-32">
      {page?.subheading && page?.heading && (
        <header className="max-w-2xl ">
          <h1 className="font-cal text-4xl font-bold text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {page?.heading}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {page?.subheading}
          </p>
        </header>
      )}

      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  );
}

export function PageHead({ page, metas }) {
  return (
    <Head>
      <title>{page?.title}</title>

      {metas?.map(
        ({ name, content }) =>
          content && <meta key={name} name={name} content={content} />
      )}
    </Head>
  );
}
