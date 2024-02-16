import React, { forwardRef } from 'react';
import type { ComponentPropsWithRef, ForwardedRef, ReactElement } from 'react';
import type { Size } from '../../../types/temp';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Label from '../Label/Label';
import {
  getInputStyling,
  getSizeStyling,
  inputBtnContainerStyling,
  inputContainerStyling,
  inputWrapperStyling,
} from './Input.style';

export interface InputProps
  extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
  label?: string;
  size?: Extract<Size, 'small' | 'medium' | 'large'>;
  isError?: boolean;
  icon?: ReactElement;
  btn?: ReactElement;
  errorMessage?: string;
}

const Input = (
  {
    label,
    size = 'medium',
    isError = false,
    icon,
    btn,
    errorMessage,
    ...attributes
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => (
  <div css={inputContainerStyling}>
    {label && <Label id={attributes.id}>{label}</Label>}
    <div>
      <div css={inputBtnContainerStyling}>
        <div css={[getSizeStyling(size), inputWrapperStyling]}>
          {icon}
          <input
            ref={ref}
            css={[getSizeStyling(size), getInputStyling]}
            {...attributes}
          />
        </div>
        {btn}
      </div>
      {errorMessage && (
        <ErrorMessage isError={isError}>{errorMessage}</ErrorMessage>
      )}
    </div>
  </div>
);

export default forwardRef(Input);
