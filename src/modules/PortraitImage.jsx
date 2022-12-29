import { defaultProps, defaultTypes } from '@/constants/props';
import { CustomImage } from '@/components/CustomImage';

export function PortraitImage({ src }) {
  return (
    <div className="relative h-96 lg:h-auto">
      <CustomImage
        className="aspect-square rounded-xl bg-zinc-100 object-cover dark:bg-zinc-800 lg:rounded-2xl"
        src={src}
      />
    </div>
  );
}

PortraitImage.defaultProps = defaultProps.portraitImage;
PortraitImage.propTypes = defaultTypes.portraitImage;
