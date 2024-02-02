import React from 'react';

type CarouselProps = {
  items: JSX.Element[];
};

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  return <div>{items.map((item) => item)}</div>;
};

export default Carousel;
