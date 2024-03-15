import type { ChangeEvent, ComponentPropsWithRef, ForwardedRef } from 'react';
import React, { forwardRef } from 'react';
import { checkBoxContainer, checkBoxLabelStyling } from './CheckBox.style';

export interface CheckboxProps extends ComponentPropsWithRef<'input'> {
  label?: string;
  isChecked?: boolean;
  handleChecked?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox = (
  {
    id,
    label = '',
    isChecked = false,
    handleChecked,
    ...attributes
  }: CheckboxProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <label htmlFor={id} css={checkBoxContainer}>
      <input
        id={id}
        checked={isChecked}
        type="checkbox"
        onChange={handleChecked}
        {...attributes}
        ref={ref}
      />
      {label && <span css={checkBoxLabelStyling}>{label}</span>}
    </label>
  );
};

export default forwardRef(CheckBox);
