import React from 'react';
import type { ComponentPropsWithRef } from 'react';
import * as S from './InfoLabel.style';

export interface InfoLabelProps extends ComponentPropsWithRef<'div'> {
  label: string;
  count: number;
}

const InfoLabel = ({ label, count, ...attributes }: InfoLabelProps) => {
  return (
    <div css={S.container} {...attributes}>
      <p css={S.label}>{label}</p>
      <p css={S.count}>{count}</p>
    </div>
  );
};

export default InfoLabel;
