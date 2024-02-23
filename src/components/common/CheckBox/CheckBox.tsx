import type { ComponentPropsWithRef, ForwardedRef } from 'react';
import React, { forwardRef, useCallback, useState } from 'react';
import { checkBoxContainer, checkBoxLabelStyling } from './CheckBox.style';

export interface CheckboxProps extends ComponentPropsWithRef<'input'> {
  label?: string;
  isChecked?: boolean;
}

const CheckBox = (
  { id, label = '', isChecked = false, ...attributes }: CheckboxProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const [checked, setChecked] = useState(isChecked);

  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  return (
    <label htmlFor={id} css={checkBoxContainer}>
      <input
        id={id}
        checked={checked}
        type="checkbox"
        onClick={handleChecked}
        {...attributes}
        ref={ref}
      />
      {label && <span css={checkBoxLabelStyling}>{label}</span>}
    </label>
  );
};

export default forwardRef(CheckBox);
