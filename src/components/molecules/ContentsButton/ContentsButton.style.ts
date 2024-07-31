import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const cardWrapper = css({
  width: '563px',
  height: '357px',
  borderRadius: '20px',
  border: `1px solid ${color.MAIN}`,
  backgroundColor: color.Neutral[800],
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  transition: 'transform 0.2s, background-color 0.2s, box-shadow 0.2s',

  '&:active': {
    backgroundColor: color.WT,
    boxShadow: '0 5px 15px 0 rgba(119, 130, 255, 0.7)',
    transform: 'scale(0.98)',
  },
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

export const chipsPosition = css({
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
