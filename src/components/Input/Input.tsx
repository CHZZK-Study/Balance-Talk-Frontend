import React from 'react';
import type { ComponentPropsWithRef, ForwardedRef, ReactElement } from 'react';
import { forwardRef } from 'react';
import { cx } from '@emotion/css';
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
  <div className={inputContainerStyling}>
    {label && (
      <Label id={attributes.id} required={attributes.required}>
        {label}
      </Label>
    )}
    <div>
      <div className={cx(getSizeStyling(size), inputWrapperStyling(isError))}>
        {icon}
        <input
          ref={ref}
          className={cx(getSizeStyling(size), getInputStyling)}
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
