import color from '@/styles/color';
import typo from '@/styles/typo';
import { css } from '@emotion/react';

export const labelStyling = css(typo.Main.SemiBold, {
  color: color.BK,
  whiteSpace: 'nowrap',
});
