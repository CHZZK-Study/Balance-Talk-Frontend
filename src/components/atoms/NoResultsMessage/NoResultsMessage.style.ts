import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const messageContainerStyle = css({
  display: 'flex',
  flexDirection: 'column',
});

export const topMessageStyle = css(typo.SubTitle, {
  color: color.BK,
});

export const keywordStyle = css({
  color: color.RED,
});

export const ulStyle = css({
  listStyleType: 'disc',
  paddingLeft: '20px',
});

export const detailMessageStyle = css(typo.Main.Medium, {
  color: color.GY[1],
  marginTop: '32px',
  gap: '6px',
});
