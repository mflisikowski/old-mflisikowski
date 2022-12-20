import Image from 'next/image';

const CustomImageLoader = ({ quality = 'smart', src }) => {
  const uuid = src.trim();
  return `https://ucarecdn.com/${uuid}/-/quality/${quality}/`;
};

export const CustomImage = ({
  height = 1200,
  width = 1200,
  alt = '',
  src,
  ...props
}) => (
  <Image
    loader={CustomImageLoader}
    height={height}
    width={width}
    src={src}
    alt={alt}
    {...props}
  />
);
