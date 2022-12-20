import { CustomImage } from '@/components/CustomImage';

export function PortraitImage({ visibilityRegions = [], src }) {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const isVisibile = visibilityRegions.includes(timeZone);

  return (
    isVisibile && (
      <div className="relative h-96 lg:h-auto">
        <CustomImage
          className="aspect-square rounded-xl bg-zinc-100 object-cover dark:bg-zinc-800 lg:rounded-2xl"
          src={src}
        />
      </div>
    )
  );
}
