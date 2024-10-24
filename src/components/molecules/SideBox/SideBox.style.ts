import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const sideBoxContainer = css({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: color.WT,
});

export const sideBoxLabel = css(typo.Comment.SemiBold, {
  color: color.BK,
  marginBottom: '10px',
  display: 'block',
  marginLeft: '20px',
});

export const infoWrapper = css({
  display: 'flex',
  gap: `30px`,
  alignItems: 'center',
  justifyContent: 'center',
});
