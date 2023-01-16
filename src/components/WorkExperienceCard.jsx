import { CustomImage } from '@/components/CustomImage';
import clsx from 'clsx';

export const WorkExperienceCard = ({
  role: { company, present, title, start, end, id },
  TagName = 'div',
}) => {
  return (
    <TagName
      className={clsx('mb-6 flex gap-4 font-mono', present && 'order-first')}
    >
      <div key={id} className="relative mt-1">
        <div className="relative flex h-10 w-10 items-center justify-center">
          <CustomImage className="p-2" src={company?.logotype} />
        </div>
      </div>
      <dl className="flex flex-col gap-x-2 lg:flex-auto lg:flex-row lg:flex-wrap">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-base font-normal uppercase text-zinc-900 lg:text-sm">
          {company?.name}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-base text-zinc-500 lg:text-xs">{title}</dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="text-xs text-zinc-400 lg:ml-auto"
          aria-label={`${start} until ${end}`}
        >
          <time dateTime={start}>{start}</time>
          <span aria-hidden="true"> — </span>
          <time dateTime={!present ? end : new Date().getFullYear()}>
            {!present ? end : 'Present'}
          </time>
        </dd>
      </dl>
    </TagName>
  );
};
