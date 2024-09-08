import React from 'react';
import * as S from './SubTag.style';

export interface SubTagProps {
  tag?: string;
}

export const SubTag = ({ tag }: SubTagProps) => {
  return <div css={S.tagStyle}>#{tag}</div>;
};
