import { Container } from '@/components/Container';
import { Utils } from '@/utils';
import Head from 'next/head';

export function Layout({ page, children }) {
  return (
    <Container className="">
      <header className="max-w-2xl print:hidden">
        {Utils.Htmls.render(page?.heading)}
        {Utils.Htmls.render(page?.subheading)}
      </header>

      <div className="mt-16 sm:mt-20">
        {children ? children : Utils.Htmls.render(page.content) || ''}
      </div>
    </Container>
  );
}

export function PageHead({ page, meta }) {
  return (
    <Head>
      <title>{page?.title}</title>

      {meta?.map(
        ({ name, content }) =>
          content && <meta key={name} name={name} content={content} />
      )}
    </Head>
  );
}
