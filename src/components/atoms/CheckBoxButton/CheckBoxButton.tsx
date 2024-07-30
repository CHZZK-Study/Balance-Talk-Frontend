import React, { forwardRef } from 'react';
import type { ComponentPropsWithoutRef, ForwardedRef, ReactNode } from 'react';
import {
  checkBoxBtnStyling,
  checkBoxRadioStyling,
  checkBoxTextStyling,
  radioLabelStyling,
} from './CheckBoxButton.style';

export interface CheckBoxButtonProps extends ComponentPropsWithoutRef<'input'> {
  children: ReactNode;
}

const CheckBoxButton = (
  { children, ...props }: CheckBoxButtonProps,
  ref: ForwardedRef<HTMLInputElement>,
) => (
  <div css={checkBoxBtnStyling}>
    <label css={radioLabelStyling}>
      <input type="radio" ref={ref} css={checkBoxRadioStyling} {...props} />
      <div css={checkBoxTextStyling}>{children}</div>
    </label>
  </div>
);

export default forwardRef(CheckBoxButton);
