import React from 'react';
import type { ComponentPropsWithRef } from 'react';
import * as S from './Toggle.style';

export interface ToggleProps extends ComponentPropsWithRef<'div'> {
  label: string;
  count: number;
}

const Toggle = ({ label, count, ...attributes }: ToggleProps) => {
  return (
    <div css={S.container} {...attributes}>
      <span css={S.label}>{label}</span>
      <span css={S.count}>{count}</span>
    </div>
  );
};

export default Toggle;
