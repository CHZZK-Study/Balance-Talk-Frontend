import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const gameRecommendStyling = css({
  display: 'flex',
  flexDirection: 'column',
  width: '230px',
  gap: '10px',
  cursor: 'pointer',
});

export const gameImgContainer = css({
  display: 'flex',
  width: '100%',
  height: '116px',
  borderRadius: '5px',
  overflow: 'hidden',
});

export const gameImgWrapper = css({
  flex: '1',
});

export const gameImgStyling = css({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const gameTitleStyling = css(typo.Comment.Regular, {
  width: '100%',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  color: color.BK,
});
