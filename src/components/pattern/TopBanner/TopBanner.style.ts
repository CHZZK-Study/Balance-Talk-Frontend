/* eslint-disable import/no-cycle */
import { css } from '@emotion/react';
import typo from '@/styles/typo';
import color from '@/styles/color';
import { loadingStyle } from '@/styles/keyframes';

export const loadingStyling = css`
  animation: ${loadingStyle} 2s infinite;
`;

export const hideInfo = css({
  visibility: 'hidden',
});

export const bannerStyling = css({
  display: 'flex',
  flexDirection: 'column-reverse',
  width: '100%',
  minHeight: '320px',
  padding: '23px',
  borderRadius: '18px',
  backgroundColor: color.Neutral[800],
  cursor: 'pointer',
});

export const bannerInfoWrapper = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const bannerTitle = css(typo.Heading_2, {
  color: color.Common[100],
});

export const bannerSummary = css(typo.Body.Medium_1, {
  gap: '5px',
  color: color.Neutral[400],
  whiteSpace: 'pre-line',
});
