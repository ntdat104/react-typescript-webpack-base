import React from 'react';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

const Image: React.FC<Props> = (props): JSX.Element => {
  const { src, ...rest } = props;
  return <img src={src} {...rest} alt={`img`} />;
};

export default Image;
