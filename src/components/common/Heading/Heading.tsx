import React, { ComponentPropsWithoutRef } from 'react';
import { getSizeStyling, headingStyling } from './Heading.style';

export interface HeadingProps extends ComponentPropsWithoutRef<'h5'> {
  type: '1' | '2' | '3' | '4';
}

const TAG_SIZE = {
  '1': 'h2',
  '2': 'h3',
  '3': 'h4',
  '4': 'h5',
} as const;

const Heading = ({ type = '1', children, ...attributes }: HeadingProps) => {
  const HeadingTag = TAG_SIZE[type];
  return (
    <HeadingTag css={(getSizeStyling(type), headingStyling)} {...attributes}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
