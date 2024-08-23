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
      <span css={S.label}>{label}</span>
      <span css={S.count}>{count}</span>
    </div>
  );
};

export default InfoLabel;
