import React from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { labelStyling } from './Label.style';

export interface LabelProps extends ComponentPropsWithoutRef<'label'> {}

const Label = ({ id, children, ...attributes }: LabelProps) => (
  <label css={labelStyling} htmlFor={id} {...attributes}>
    {children}
  </label>
);

export default Label;
