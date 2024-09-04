import { css } from '@emotion/react';
import typo from '@/styles/typo';
import color from '@/styles/color';

export const textModalStyling = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  gap: '30px',
});

export const modalTextWrapper = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '34px',
  gap: '12px',
});

export const modalTextStyling = css(typo.SubTitle, {
  color: color.BK,
});

export const modalSmallTextStyling = css(typo.Main.Medium, {
  color: color.GY[1],
});

export const buttonWrapperStyling = css({
  display: 'flex',
  flexDirection: 'row-reverse',
  width: '100%',
  padding: '0 12px',
  gap: '43px',
});

export const buttonTextStyling = css(typo.SubTitle, {
  color: color.BLUE,
  cursor: 'pointer',
});
