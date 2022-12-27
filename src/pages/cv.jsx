import { Button } from '@/components/Button';
import configuration from 'website-config';
import { Layout } from '@/modules/Layout';

import Head from 'next/head';

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function curriculumVitae({
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
        Curriculum Vitae{' '}
        <Button
          href="/api/download-cv"
          className="group mt-6 w-full"
          variant="secondary"
        >
          Download CV
        </Button>
      </Layout>
    </>
  );
}

export const getServerSideProps = async () => {
  const { layout, metas, title } = configuration?.pages?.cv;

  return {
    props: {
      data: {
        page: {
          layout,
          title,
          metas,
        },
      },
    },
  };
};
