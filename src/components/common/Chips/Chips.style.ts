import { css } from '@emotion/react';
import typo from '@/styles/typo';
import color from '@/styles/color';
import type { ChipsProps } from './Chips';

export const getSizeStyling = (size: Required<ChipsProps>['size']) => {
  const style = {
    large: css({
      padding: '12px 16px',
      borderRadius: '15px',
      fontSize: typo.Body.SemiBold_1.fontSize,
    }),
    small: css(typo.Body.Medium_2, {
      padding: '7px 12px',
      borderRadius: '12px',
    }),
  };

  return style[size];
};

export const chipsStyling = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: color.Primary['400'],
  color: color.Common['100'],
  cursor: 'pointer',
});
