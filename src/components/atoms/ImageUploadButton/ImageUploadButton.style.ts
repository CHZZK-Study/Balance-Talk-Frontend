import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const buttonStyle = (imageLength: number) =>
  css({
    outline: imageLength < 10 ? `1px solid ${color.GY[2]}` : 'none',
    backgroundColor: imageLength < 10 ? color.WT : color.GY[2],
    borderRadius: '15px',
    padding: '19px 30px',
    width: '100px',
    height: '100px',
    cursor: 'pointer',
  });

export const inputStyle = css({
  display: 'none',
});

export const contentStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const countWrapStyle = css(typo.Number.Medium, {
  color: color.GY[1],
  marginTop: '2px',
});
