import React from 'react';
import type { ComponentPropsWithRef } from 'react';
import * as S from './Tag.style';

export interface TagProps extends ComponentPropsWithRef<'div'> {
  label: string;
}

const Tag = ({ label, ...attributes }: TagProps) => (
  <div css={S.tag} {...attributes}>
    {label}
  </div>
);

export default Tag;
