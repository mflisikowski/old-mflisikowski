import { ArrowDownIcon, BriefcaseIcon } from '@/components/Icons';
import { Button } from '@/components/Button';
import Image from 'next/image';
import clsx from 'clsx';

const WorkspaceItem = ({ role: { id, logo, company, title, start, end } }) => {
  return (
    <li key={id} className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <div className="relative h-5 w-5">
          <Image unoptimized src={logo} alt="" fill />
        </div>
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">{title}</dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${start.label ?? start} until ${end.label ?? end}`}
        >
          <time dateTime={start.dateTime ?? start}>{start.label ?? start}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={end.dateTime ?? end}>{end.label ?? end}</time>
        </dd>
      </dl>
    </li>
  );
};

export function Workspaces({ workplaces, className }) {
  return (
    <div
      className={clsx(
        'rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 lg:max-w-none',
        className
      )}
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="ml-2 h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>

      <ol className="mt-6 space-y-4">
        {workplaces.map((role) => (
          <WorkspaceItem key={role.id} role={role} />
        ))}
      </ol>

      <Button className="group mt-6 w-full" variant="secondary" disabled>
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  );
}
