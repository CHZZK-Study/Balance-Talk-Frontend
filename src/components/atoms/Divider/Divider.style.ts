import { css } from '@emotion/react';
import color from '@/styles/color';
import type { DividerProps } from './Divider';

export const getDividerStyling = ({
  orientation,
  length,
}: Required<DividerProps>) => {
  const style = {
    width: css({
      width: `${length}px`,
      borderBottom: `1px solid ${color.GY[2]}`,
    }),
    height: css({
      height: `${length}px`,
      borderRight: `1px solid ${color.GY[2]}`,
    }),
  };

  return style[orientation];
};
