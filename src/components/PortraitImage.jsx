import { CustomImage } from '@/components/CustomImage';
import clsx from 'clsx';

export function PortraitImage({ src, className = '' }) {
  return (
    <div className={clsx('relative', className)}>
      <CustomImage
        className="rounded-2xl bg-zinc-100 object-cover xl:aspect-square xl:rounded-xl"
        src={src}
      />
    </div>
  );
}
