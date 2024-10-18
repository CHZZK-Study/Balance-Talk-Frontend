import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const balanceGameContainer = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '1175px',
  padding: '50px',
  gap: '50px',
  borderRadius: '20px',
  border: `1px solid ${color.GY[2]}`,
  boxShadow: '1px 2px 10px rgba(0, 0, 0, 0.07)',
});

export const titleStyling = css(typo.Title, {
  color: color.MAIN,
});

export const imgWrapper = css({
  padding: '20px 0px 10px 0px',
});

export const buttonWrapper = css({
  display: 'flex',
  gap: '20px',
});
