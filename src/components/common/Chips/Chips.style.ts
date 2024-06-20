import { css } from '@emotion/react';
import typo from '@/styles/typo';
import color from '@/styles/color';
import type { ChipsProps } from './Chips';

export const getSizeStyling = (size: Required<ChipsProps>['size']) => {
  const style = {
    large: css(typo.Body.SemiBold_5, {
      padding: '6px 12px',
      borderRadius: '8px',
    }),
    small: css(typo.Body.Medium_5, {
      padding: '2px 8px',
      borderRadius: '6px',
    }),
  };

  return style[size];
};

export const chipsStyling = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'fit-content',
  backgroundColor: color.Primary[400],
  color: color.Neutral[50],
  cursor: 'pointer',
});
