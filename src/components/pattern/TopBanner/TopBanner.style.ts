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
  minHeight: '297px',
  padding: '30px',
  borderRadius: '20px',
  backgroundColor: color.Neutral[800],
  cursor: 'pointer',
});

export const bannerWrapper = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
});

export const bannerInfoWrapper = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const bannerTitle = css(typo.Heading_2, {
  color: color.Neutral[50],
});

export const bannerSummary = css(typo.Body.Medium_1, {
  color: color.Neutral[400],
  whiteSpace: 'pre-line',
});
