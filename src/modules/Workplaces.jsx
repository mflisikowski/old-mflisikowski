import { BriefcaseIcon } from '@/icons/BriefcaseIcon';
import { CustomImage } from '@/components/CustomImage';
import { ArrowDownIcon } from '@/icons/ArrowIcon';
import { Button } from '@/components/Button';
import useDownloader from 'react-use-downloader';
import clsx from 'clsx';
import { SpinnerIcon } from '@/icons/SpinnerIcon';

const WorkspaceItem = ({
  role: { company, present, title, start, end, id },
}) => {
  return (
    <li key={id} className="flex gap-4">
      <div className="relative mt-1 ">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <CustomImage className="p-2.5" src={company.logotype} />
        </div>
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {company.name}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">{title}</dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${start} until ${end}`}
        >
          <time dateTime={start}>{start}</time>
          <span aria-hidden="true"> — </span>
          <time dateTime={!present ? end : new Date().getFullYear()}>
            {!present ? end : 'Present'}
          </time>
        </dd>
      </dl>
    </li>
  );
};

const WorkplaceButton = ({ children, ...props }) => {
  const { download, isInProgress } = useDownloader();

  const clickHandler = () => download('/api/download-cv', 'cv.pdf');

  return (
    <Button onClick={clickHandler} className="group mt-6 w-full" {...props}>
      {!isInProgress ? (
        children
      ) : (
        <>
          Generating in progress
          <SpinnerIcon className="-ml-1 mr-3 h-5 w-5 animate-spin stroke-zinc-400 transition group-active:stroke-zinc-600 motion-safe:animate-spin dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />{' '}
        </>
      )}
    </Button>
  );
};

export function Workspaces({ workplaces, className }) {
  const isWorkplaceAvailable = workplaces.length > 0;

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

      {isWorkplaceAvailable ? (
        <>
          <ol className="mt-6 space-y-4">
            {workplaces.map((role) => (
              <WorkspaceItem key={role.id} role={role} />
            ))}
          </ol>

          <WorkplaceButton variant="primary">
            Download CV
            <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
          </WorkplaceButton>
        </>
      ) : (
        <>
          <div className="mt-6 space-y-4">
            <p className="flex gap-4">No worplace to display here</p>
          </div>

          <WorkplaceButton variant="disabled" disabled>
            Download CV
          </WorkplaceButton>
        </>
      )}
    </div>
  );
}
