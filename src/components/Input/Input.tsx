import React, { forwardRef } from 'react';
import type { ComponentPropsWithRef, ForwardedRef, ReactElement } from 'react';
import type { Size } from '../../types/temp';
import Label from '../Label/Label';
import {
  getInputStyling,
  getSizeStyling,
  inputContainerStyling,
  inputWrapperStyling,
} from './Input.style';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export interface InputProps
  extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
  label?: string;
  size?: Extract<Size, 'small' | 'medium' | 'large'>;
  isError?: boolean;
  icon?: ReactElement;
  errorMessage?: string;
}

const Input = (
  {
    label,
    size = 'medium',
    isError = false,
    icon,
    errorMessage,
    ...attributes
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => (
  <div css={inputContainerStyling}>
    {label && <Label id={attributes.id}>{label}</Label>}
    <div>
      <div css={[getSizeStyling(size), inputWrapperStyling]}>
        {icon}
        <input
          ref={ref}
          css={[getSizeStyling(size), getInputStyling]}
          {...attributes}
        />
      </div>
      {errorMessage && (
        <ErrorMessage isError={isError}>{errorMessage}</ErrorMessage>
      )}
    </div>
  </div>
);

export default forwardRef(Input);
