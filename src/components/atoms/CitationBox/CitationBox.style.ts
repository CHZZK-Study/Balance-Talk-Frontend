import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const boxStyle = css({
  width: '384px',
  height: '47px',
  padding: '9px 69px 9px 63px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  color: color.GY[1],
  border: `1px solid ${color.GY[2]}`,
  borderRadius: '15px',
  backgroundColor: color.WT,
});

export const boxTitleStyle = css(typo.Main.SemiBold, {
  marginRight: '60px',
});

export const inputStyle = css(typo.Comment.Regular, {
  width: '153px',
  border: 'none',
  color: color.GY[1],
});
