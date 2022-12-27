import Image from 'next/image';

const CustomImageLoader = ({ quality = 'smart', src }) => {
  const isHttp = src.startsWith('http');
  const source = isHttp ? src : `https://ucarecdn.com/${src}`;

  return `${source}/-/preview/-/quality/${quality}/`;
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
