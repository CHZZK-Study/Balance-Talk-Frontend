import { css } from '@emotion/react';
import typo from '@/styles/typo';
import color from '@/styles/color';

export const textModalStyling = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  gap: '34px',
});

export const modalTextStyling = css(typo.SubTitle, {
  display: 'flex',
  marginTop: '34px',
  color: color.BK,
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
