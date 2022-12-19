import Image from 'next/image';

export function PortraitImage({ visibilityRegions = [], src }) {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const isVisibile = visibilityRegions.includes(timeZone);

  return (
    isVisibile && (
      <Image
        className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
        sizes="(min-width: 1024px) 32rem, 20rem"
        src={src}
        alt=""
      />
    )
  );
}
