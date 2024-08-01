import { css } from '@emotion/react';
import color from '@/styles/color';

export const otherStyling = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '500px',
  backgroundColor: color.BK,
  color: color.WT,
  cursor: 'pointer',
});
