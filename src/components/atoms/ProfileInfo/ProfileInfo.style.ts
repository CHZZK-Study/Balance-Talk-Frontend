import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const profileInfoContainer = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const profileNumberStyling = css({
  ...typo.Number.SemiBold,
  color: color.MAIN,
  textAlign: 'center',
});

export const profileLabelStyling = css({
  ...typo.Comment.Regular,
  color: color.GY[1],
  textAlign: 'center',
});
