import { css } from '@emotion/react';
import typo from '@/styles/typo';
import color from '@/styles/color';
import { loadingStyle } from '@/styles/keyframes';

export const loadingStyling = css`
  animation: ${loadingStyle} 2s infinite;
`;

export const cardWrapper = css({
  minWidth: '327px',
  minHeight: '250px',
  width: '327px',
  maxWidth: '355px',
  borderRadius: '20px',
  backgroundColor: color.Neutral[800],
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
});

export const textWrapper = css({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '175px',
  paddingLeft: '24px',
  paddingRight: '24px',
  gap: '2px',
});

export const titleStyling = css(typo.Body.SemiBold_3, {
  zIndex: 1,
  color: color.Neutral[50],
});

export const descriptionStyling = css(typo.Body.Regular_1, {
  zIndex: 1,
  color: color.Neutral[400],
});

export const backgroundContainer = css({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '250px',
  position: 'absolute',
  maskImage:
    'linear-gradient(to bottom, rgba(0, 0, 0, 1) 35%, rgba(20, 21, 23, 0) 115%)',
});

export const imgContainer = css({
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  '&::after': {
    content: '""',
    width: '100%',
    height: '50%',
    backdropFilter: 'blur(25px)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    maskImage:
      'linear-gradient(to top, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)',
  },
});
