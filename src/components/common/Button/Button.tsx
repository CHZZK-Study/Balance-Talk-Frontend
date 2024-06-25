import React, { forwardRef } from 'react';
import type { ComponentPropsWithRef, ForwardedRef, ReactElement } from 'react';
import type { Size } from '../../../types/theme';
import {
  buttonStyling,
  getSizeStyling,
  getVariantStyling,
} from './Button.style';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  size?: Extract<Size, 'small' | 'large'>;
  variant?:
    | 'solidPrimary'
    | 'solidNeutral'
    | 'outlinePrimary'
    | 'outlineAssistive';
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
}

const Button = (
  {
    size = 'large',
    variant = 'solidPrimary',
    children,
    iconLeft,
    iconRight,
    ...attributes
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => (
  <button
    type="button"
    ref={ref}
    css={[buttonStyling, getVariantStyling(variant), getSizeStyling(size)]}
    {...attributes}
  >
    {iconLeft}
    {children}
    {iconRight}
  </button>
);

export default forwardRef(Button);
