import { css } from '@emotion/react';
import color from '@/styles/color';

export const socialLoginStyling = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
});

export const loginButtonStyling = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '83px',
  height: '83px',
  borderRadius: '50%',
  backgroundColor: color.WT,
  outline: `1px solid ${color.GY[2]}`,
  cursor: 'pointer',
});

export const recentLoginStyling = css({
  position: 'absolute',
  marginTop: '90px',
});
