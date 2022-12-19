import Image from 'next/image';

export function PortraitImage({ visibilityRegions = [], src }) {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const isVisibile = visibilityRegions.includes(timeZone);

  return (
    isVisibile && (
      <div className="relative h-96 lg:h-auto">
        <Image
          className="aspect-square rounded-xl bg-zinc-100 object-cover dark:bg-zinc-800 lg:rounded-2xl"
          unoptimized
          src={src}
          alt=""
          fill
        />
      </div>
    )
  );
}
