import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const menuTapStyling = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
});

export const menuIconStlying = css({
  width: '11px',
  height: '17px',
  cursor: 'pointer',
});

export const menuStlying = css({
  position: 'absolute',
  marginTop: '23px',
  width: '86px',
  listStyle: 'none',
  backgroundColor: color.WT,
  border: `1px solid ${color.GY[2]}`,
  borderRadius: '10px',
  boxShadow: '1px 2px 10px rgba(0, 0, 0, 0.07)',
  cursor: 'pointer',
});

export const menuItemStyling = css(typo.Comment.SemiBold, {
  padding: '10px',
  textAlign: 'center',
  color: color.BK,
  borderBottom: `1px solid ${color.GY[2]}`,
  ':last-child': {
    borderBottom: 'none',
  },
});
