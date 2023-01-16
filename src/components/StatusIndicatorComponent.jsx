export const StatusIndicatorComponent = ({ status }) => {
  return (
    status?.active && (
      <span className="flex flex-row-reverse items-center print:hidden">
        <span className="block h-4 w-4 animate-bounce rounded-full bg-green-600 ring-2 ring-white" />
        <span className="mr-4 inline-flex items-center rounded-full bg-white px-2.5 py-0.5 text-xs font-medium uppercase text-slate-600">
          <span className="font-bold">#</span>
          {status?.description}
        </span>
      </span>
    )
  );
};
