import React, { ReactNode } from 'react';
// import type { Size } from '@/types/theme';
import { chipsStyling } from './Chips.style';

export interface ChipsProps {
  // size?: Extract<Size, 'large'>;
  // variant?: 'outline';
  children?: ReactNode;
}

const Chips = ({ children }: ChipsProps) => (
  <div css={chipsStyling}>{children}</div>
);

export default Chips;
