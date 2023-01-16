import { SpinnerIcon } from '@/icons/SpinnerIcon';
import { Button } from './Button';

import useDownloader from 'react-use-downloader';

export const DownloadButton = ({
  name = 'cv.pdf',
  url = '/api/download-cv',
  variant = 'secondary',
  children,
  ...props
}) => {
  const { download, isInProgress } = useDownloader();

  return (
    <Button
      onClick={() => download(url, name)}
      className="group mt-6 w-full print:hidden"
      variant={variant}
      {...props}
    >
      {!isInProgress ? (
        children
      ) : (
        <>
          Generating in progress
          <SpinnerIcon className="-ml-1 mr-3 h-5 w-5 animate-spin stroke-zinc-400 transition group-active:stroke-zinc-600 motion-safe:animate-spin" />{' '}
        </>
      )}
    </Button>
  );
};
