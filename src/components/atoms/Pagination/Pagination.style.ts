import color from '@/styles/color';
import typo from '@/styles/typo';
import { css } from '@emotion/react';

export const paginationContainer = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: `20px 0px `,
  gap: '16px',
});

export const pageBoxStyling = css(typo.Number.Medium_18, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '40px',
  height: '40px',

  color: color.GY[1],
  transition: 'all .1s ease-in',
  cursor: 'pointer',

  '&:hover': {
    color: color.MAIN,
  },
});

export const pageSelectedBoxStyling = css({
  color: color.MAIN,
});
