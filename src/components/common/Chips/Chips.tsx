/* eslint-disable react/react-in-jsx-scope */
import { ReactNode } from 'react';
import type { Size } from '@/types/temp';
import { chipsStyling, getSizeStyling } from './Chips.style';

export interface ChipsProps {
  size?: Extract<Size, 'small' | 'large'>;
  children?: ReactNode;
}

const Chips = ({ size = 'large', children }: ChipsProps) => (
  <div css={[chipsStyling, getSizeStyling(size)]}>{children}</div>
);

export default Chips;
