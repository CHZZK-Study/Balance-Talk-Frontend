import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const ButtonStyle = css({
  display: 'flex',
  flexDirection: 'row',
  columnGap: '10px',
  alignItems: 'center',
  cursor: 'pointer',

  '&:hover': {
    svg: {
      fill: color.MAIN,
    },
    span: {
      textDecorationColor: color.MAIN,
      color: color.MAIN,
    },
  },

  '&:active': {
    svg: {
      fill: color.MAIN,
    },
    span: {
      textDecorationColor: color.MAIN,
      color: color.MAIN,
    },
  },
});

export const iconStyle = css({
  fill: color.GY[1],
  transition: 'fill 0.3s',
});

export const buttonTextStyle = css(typo.Main.Medium, {
  textDecoration: 'underline',
  textDecorationColor: color.GY[1],
  color: color.GY[1],
  transition: 'textDecorationColor 0.3s, color 0.3s',
});
