import React from 'react';
import type { InfoLabelProps } from '@/types/atoms';
import * as S from './InfoLabel.style';

const InfoLabel = ({ label, count, ...attributes }: InfoLabelProps) => {
  return (
    <div css={S.container} {...attributes}>
      <span css={S.label}>{label}</span>
      <span css={S.count}>{count}</span>
    </div>
  );
};

export default InfoLabel;
