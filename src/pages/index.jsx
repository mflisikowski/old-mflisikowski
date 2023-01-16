import { getEmployee } from '@/services/getEmployee';
import { PageHead as Head } from '@/components/Page';
import { Container } from '@/components/Container';
import { Utils } from '@/utils';

export default function Home({ meta, page }) {
  return (
    <>
      <Head page={page} meta={meta} />

      <Container>
        <header className="max-w-2xl">
          {Utils.Htmls.render(page?.heading)}
          {Utils.Htmls.render(page?.subheading)}
        </header>

        <div className="mt-16 sm:mt-20">
          <div className="inline space-y-8">
            {Utils.Htmls.render(page?.content)}
          </div>
        </div>
      </Container>
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
      meta: {
        select: {
          content: true,
          name: true,
          id: true,
        },
      },
      page: {
        select: {
          subheading: true,
          heading: true,
          content: true,
        },
        route: true,
      },
    },
  });

  return {
    props: {
      employee: {
        ...employee,
        status: relations?.status || null,
      },
      social: relations?.social || null,
      route: relations?.route || null,
      meta: relations?.meta || null,
      page: relations?.page || null,
    },
  };
};
