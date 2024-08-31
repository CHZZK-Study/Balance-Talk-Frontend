import color from '@/styles/color';
import { css } from '@emotion/react';

export const searchBarContainerStyling = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const btnWrapperStyling = css({
  display: 'flex',
  padding: '0 10px',
  gap: '14px',
});

export const selectedButtonStyling = css({
  backgroundColor: color.MAIN,
  color: color.WT,
});
