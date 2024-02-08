import React, { forwardRef } from 'react';
import type { ComponentPropsWithRef, ForwardedRef } from 'react';
import type { Size } from '../../types/temp';
import {
  buttonStyling,
  getSizeStyling,
  getVariantStyling,
} from './Button.style';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  size?: Extract<Size, 'small' | 'medium' | 'large'>;
  variant?: 'default' | 'outline' | 'cancel';
}

const Button = (
  {
    size = 'medium',
    variant = 'default',
    children,
    ...attributes
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => (
  <button
    ref={ref}
    css={[buttonStyling, getVariantStyling(variant), getSizeStyling(size)]}
    {...attributes}
  >
    {children}
  </button>
);

export default forwardRef(Button);
