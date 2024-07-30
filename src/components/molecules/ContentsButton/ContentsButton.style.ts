import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const cardWrapper = css({
  // minWidth: '327px',
  // minHeight: '250px',
  // width: '327px',
  // maxWidth: '355px',
  width: '563px',
  height: '357px',
  borderRadius: '20px',
  border: `1px solid ${color.MAIN}`,
  backgroundColor: color.Neutral[800],
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
});

export const imageContainer = css({
  position: 'relative',
  width: '100%',
  height: '250px',
});

export const image = css({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const tag = css({
  position: 'absolute',
  top: '10px',
  left: '10px',
});

export const infoContainer = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '20px 27px 0 37px',
  backgroundColor: color.WT,
  width: '100%',
  height: '107px',
});

export const label = css({
  ...typo.Component.Medium,
  color: color.BK,
});
