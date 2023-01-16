import clsx from 'clsx';

export const GroupHeading = ({ children, className = '' }) => {
  return (
    <div className={clsx('relative', className)}>
      <div className="font-cal text-md relative flex items-center font-extralight uppercase tracking-widest text-zinc-700">
        {children}
      </div>
    </div>
  );
};
