import React from 'react';
import { getDividerStyling } from './Divider.style';

export interface DividerProps {
  orientation?: 'width' | 'height';
  length: number;
}

const Divider = ({ orientation = 'height', length }: DividerProps) => (
  <div css={getDividerStyling({ orientation, length })} />
);

export default Divider;
