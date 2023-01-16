import { StatusIndicatorComponent } from '@/components/StatusIndicatorComponent';
import { WorkExperienceCard } from '@/components/WorkExperienceCard';
import { DownloadButton } from '@/components/DownloadButton';
import { PortraitImage } from '@/components/PortraitImage';
import { GroupHeading } from '@/components/GroupHeading';
import { getEmployee } from '@/services/getEmployee';

import { PageHead as Head, Layout } from '@/components/Page';
import { DownloadIcon } from '@/icons/DownloadIcon';

export default function CV({ employee, page, meta }) {
  return (
    employee.id && (
      <>
        <Head page={page} meta={meta} />

        <Layout page={page}>
          <section className="grid grid-cols-4 gap-24 xl:grid-cols-8 xl:gap-24">
            <aside className="col-span-full self-start xl:sticky xl:top-10 xl:col-span-3">
              <div className="grid space-y-8">
                <div className="relative mt-8 md:mt-0">
                  <PortraitImage src={employee?.portrait} />
                  <span className="absolute bottom-6 right-6 justify-end">
                    <StatusIndicatorComponent status={employee?.status} />
                  </span>
                </div>

                <h1 className="order-first hidden space-y-2 print:block md:order-none md:mb-8">
                  <span className="block text-3xl font-bold leading-8 tracking-tight text-zinc-900 sm:text-4xl">
                    {employee.name}
                  </span>
                  <span className="block font-mono text-base font-normal text-zinc-500">
                    {employee.title}
                  </span>
                </h1>

                <div className="mt-auto space-y-1 font-mono">
                  {employee?.experience && (
                    <div className="xs:flex-row xs:justify-between flex flex-col items-start justify-center sm:items-baseline">
                      <div className="lg:text-md font-mono text-base text-zinc-400">
                        Experience
                      </div>
                      <div className="lg:text-md font-mono text-base text-zinc-800">
                        {`${employee?.experience?.years} years`}
                      </div>
                    </div>
                  )}

                  {employee?.availability && (
                    <div className="xs:flex-row xs:justify-between flex flex-col items-start justify-center sm:items-baseline">
                      <div className="lg:text-md font-mono text-base text-zinc-400">
                        Availability
                      </div>
                      <div className="lg:text-md font-mono text-base text-zinc-800">
                        {employee?.availability?.description}
                      </div>
                    </div>
                  )}

                  {employee?.relocation && (
                    <div className="xs:flex-row xs:justify-between flex flex-col items-start justify-center sm:items-baseline">
                      <div className="lg:text-md font-mono text-base text-zinc-400">
                        Relocation
                      </div>
                      <div className="lg:text-md font-mono text-base text-zinc-800">
                        {employee?.relocation?.description}
                      </div>
                    </div>
                  )}

                  {employee?.birthday && (
                    <div className="xs:flex-row xs:justify-between flex flex-col items-start justify-center sm:items-baseline">
                      <div className="lg:text-md font-mono text-base text-zinc-400">
                        Birthday
                      </div>
                      <div className="lg:text-md font-mono text-base text-zinc-800">
                        {employee?.birthday}
                      </div>
                    </div>
                  )}

                  {employee?.location &&
                    employee?.city &&
                    employee?.postcode && (
                      <div className="xs:flex-row xs:justify-between flex flex-col items-start justify-center sm:items-baseline">
                        <div className="lg:text-md font-mono text-base text-zinc-400">
                          Location
                        </div>
                        <div className="lg:text-md font-mono text-base text-zinc-800">
                          {employee?.location},{employee?.city}{' '}
                          {employee?.postcode}
                        </div>
                      </div>
                    )}

                  {employee?.address && (
                    <div className="xs:flex-row xs:justify-between flex flex-col items-start justify-center sm:items-baseline">
                      <div className="lg:text-md font-mono text-base text-zinc-400">
                        Address
                      </div>
                      <div className="lg:text-md font-mono text-base text-zinc-800">
                        {employee?.address}
                      </div>
                    </div>
                  )}

                  {employee?.phone && (
                    <div className="xs:flex-row xs:justify-between flex flex-col items-start justify-center sm:items-baseline">
                      <div className="lg:text-md font-mono text-base text-zinc-400">
                        Phone
                      </div>
                      <div className="lg:text-md font-mono text-base text-zinc-800">
                        {employee?.phone}
                      </div>
                    </div>
                  )}

                  {employee?.email && (
                    <div className="xs:flex-row xs:justify-between flex flex-col items-start justify-center sm:items-baseline">
                      <div className="lg:text-md font-mono text-base text-zinc-400">
                        Email
                      </div>
                      <div className="lg:text-md font-mono text-base text-zinc-800">
                        {employee?.email}
                      </div>
                    </div>
                  )}
                </div>

                <DownloadButton
                  variant="secondary"
                  className="font-mono text-base"
                >
                  Download CV
                  <DownloadIcon className="h-4 w-4 stroke-zinc-900" />
                </DownloadButton>
              </div>
            </aside>

            <article className="col-span-full xl:order-first xl:col-span-5">
              <div className="mx-auto max-w-prose space-y-12 text-lg">
                <GroupHeading>Summary:</GroupHeading>

                <p className="lg:text-md font-mono text-base text-zinc-800 lg:leading-8">
                  As a design-oriented front-end developer, I am constantly
                  seeking out new ways to improve the user experience and create
                  visually appealing websites. I have a strong understanding of
                  design principles and how to apply them to the web, and I am
                  proficient in modern technologies such as responsive design,
                  modern CSS, and JavaScript. I am also committed to ensuring
                  that my work is accessible to all users, regardless of their
                  abilities or the devices they use.
                </p>

                <p className="lg:text-md font-mono text-base text-zinc-800 lg:leading-8">
                  Whether I am building a simple landing page or a complex web
                  application, I am always looking for ways to push the
                  boundaries and create something truly special. I am passionate
                  about my work and dedicated to delivering the highest quality
                  products to my clients. So, I hope to work with you soon and
                  bring your vision to life.
                </p>

                <GroupHeading>Work Experience:</GroupHeading>

                {employee?.workplace?.length ? (
                  <ol className="mt-6 grid">
                    {employee?.workplace?.map((role) => {
                      return (
                        <WorkExperienceCard
                          key={role.id}
                          role={role}
                          TagName="li"
                        />
                      );
                    })}
                  </ol>
                ) : (
                  <div className="mt-6 space-y-6">
                    <p className="flex gap-4">No worplace to display here</p>
                  </div>
                )}

                <GroupHeading>Skills:</GroupHeading>

                <div className="mt-6 grid grid-cols-1 gap-0.5 font-mono sm:grid-cols-2 md:grid-cols-3 lg:mt-8">
                  {employee?.skill?.length ? (
                    employee?.skill?.map(({ name, level }) => (
                      <div
                        className="col-span-1 flex justify-center bg-zinc-50 py-8 px-8 "
                        key={name}
                      >
                        <div className="grid text-center">
                          <p className="text-lg font-semibold uppercase">
                            {name}
                          </p>
                          <p className="text-xs font-light uppercase">
                            ({level})
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="mt-6 space-y-6">
                      <p className="flex gap-4">No skills to display here</p>
                    </div>
                  )}
                </div>
              </div>
            </article>
          </section>
        </Layout>
      </>
    )
  );
}

export const getServerSideProps = async ({ resolvedUrl }) => {
  const employee_id = 'b84f66a6-7134-438e-8123-f27fe78f35ec';

  const { employee, relations } = await getEmployee({
    employee_id: employee_id,
    resolvedUrl,
    relations: {
      availability: {
        select: {
          description: true,
          label: true,
          id: true,
        },
      },
      workplace: {
        select: {
          company: {
            select: {
              logotype: true,
              name: true,
            },
          },
          present: true,
          title: true,
          start: true,
          end: true,
          id: true,
        },
        orderBy: {
          end: 'desc',
        },
      },
      relocation: {
        select: {
          description: true,
          label: true,
          id: true,
        },
      },
      skill: {
        where: {
          active: true,
        },
      },
      setting: true,
      status: true,
      social: true,
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
        availability: relations?.availability || null,
        relocation: relations?.relocation || null,
        experience: relations?.experience || null,
        workplace: relations?.workplace || null,
        setting: relations?.setting || null,
        status: relations?.status || null,
        skill: relations?.skill || null,
      },
      social: relations?.social || null,
      route: relations?.route || null,
      meta: relations?.meta || null,
      page: relations?.page || null,
    },
  };
};
