import React from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { labelStyling, requiredStyling } from './Label.style';

export interface LabelProps extends ComponentPropsWithoutRef<'label'> {
  required?: boolean;
}

const Label = ({
  id,
  required = false,
  children,
  ...attributes
}: LabelProps) => (
  <label className={labelStyling} htmlFor={id} {...attributes}>
    {children}{' '}
    {required && (
      <span className={requiredStyling} aria-hidden>
        *
      </span>
    )}
  </label>
);

export default Label;