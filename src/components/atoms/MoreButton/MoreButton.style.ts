import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const moreButtonStyling = css(typo.Main.Medium, {
  display: 'flex',
  alignItems: 'center',
  gap: '7px',
  color: color.GY[1],
  cursor: 'pointer',
});
