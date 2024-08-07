import { css } from '@emotion/react';
import typo from '@/styles/typo';
import color from '@/styles/color';

export const buttonStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
  padding: '0',
  background: 'none',
  border: 'none',
  outline: 'none',
  width: '284px',
});

export const buttonTitleStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: '8px',
  transition: 'color 0.3s ease-in-out',
});

export const iconStyle = css({
  marginLeft: '8px',
});

export const activeStyle = css(typo.Component.Bold, {
  color: color.MAIN,
});

export const inactiveStyle = css(typo.Component.Medium, {
  color: color.GY[1],
});

export const inactiveBadgeWrapStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  marginTop: '22px',
});

export const badgeWrapStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  marginTop: '14px',
});

export const inactiveLineStyle = (label: string) => {
  let borderRadius = '0';
  if (label === '인기') {
    borderRadius = '10px 0 0 10px';
  } else if (label === '월드컵') {
    borderRadius = '0 10px 10px 0';
  }

  return css({
    flex: 1,
    height: '5px',
    backgroundColor: color.GY[2],
    borderRadius,
  });
};

export const leftLineStyle = css({
  flex: 1,
  height: '5px',
  borderRadius: '10px 0 0 10px',
  backgroundColor: color.MAIN,
});

export const rightLineStyle = css({
  flex: 1,
  height: '5px',
  borderRadius: '0 10px 10px 0',
  backgroundColor: color.MAIN,
});

export const badgeStyle = css(typo.Comment.SemiBold, {
  padding: '4.5px 32px',
  borderRadius: '30px',
  backgroundColor: color.MAIN,
  color: color.WT,
});
