import React from 'react';
import { ComponentPropsWithoutRef } from 'react';
import { Size } from '../../types/temp';
import { getSizeStyling } from './Heading.style';

export interface HeadingProps extends ComponentPropsWithoutRef<'h4'> {
  size?: Extract<Size, 'large' | 'medium' | 'small'>;
}

const TAG_SIZE = {
  large: 'h3',
  medium: 'h4',
  small: 'h5',
} as const;

const Heading = ({
  size = 'medium',
  children,
  ...attributes
}: HeadingProps) => {
  const HeadingTag = TAG_SIZE[size];
  return (
    <HeadingTag className={getSizeStyling(size)} {...attributes}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
