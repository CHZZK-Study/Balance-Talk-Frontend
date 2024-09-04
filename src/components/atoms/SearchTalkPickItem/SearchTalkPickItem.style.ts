import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const searchTalkPickItemStyle = css({
  display: 'flex',
  flexDirection: 'row',
  width: '1065px',
  height: '100px',
  cursor: 'pointer',
});

export const leftContentStyle = css({
  display: 'flex',
  flexDirection: 'column',
  width: '861px',
  height: '78px',
  margin: '11px 104px 11px 0',
});

export const titleWrapStyle = css({
  display: 'flex',
  flexDirection: 'row',
  marginBottom: '4px',
  alignItems: 'center',
});

export const titleStyle = css(typo.Main.Medium, {
  color: color.BK,
  marginRight: '9px',
});

export const dateStyle = css(typo.Number.Regular, {
  color: color.GY[1],
});

export const contentWrapStyle = css(typo.Comment.Regular, {
  overflowY: 'hidden',
  height: '45px',
  color: color.GY[1],
});

export const imageContainerStyle = css({
  width: '100px',
  height: '100px',
  borderRadius: '10px',
});
