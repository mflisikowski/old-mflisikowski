import { getEmployee } from '@/services/getEmployee';
import { PageHead as Head, Layout } from '@/components/Page';

export default function Home({ employee, meta, page }) {
  return (
    <>
      <Head page={page} meta={meta} />
      <Layout page={page}></Layout>
    </>
  );
}

export const getServerSideProps = async ({ resolvedUrl }) => {
  const employee_id = 'b84f66a6-7134-438e-8123-f27fe78f35ec';

  const { employee, relations } = await getEmployee({
    employee_id: employee_id,
    resolvedUrl,
    relations: {
      social: true,
      projects: true,
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
        projects: relations?.projects || null,
      },
      social: relations?.social || null,
      route: relations?.route || null,
      meta: relations?.meta || null,
      page: relations?.page || null,
    },
  };
};
