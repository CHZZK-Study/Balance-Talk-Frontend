import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const containerStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '1122px',
});

export const letterStyle = css(typo.Title, {
  color: color.GY[1],
  position: 'absolute',
  bottom: '35px',
  left: '557.5px',
  transform: 'translate(-50%, -50%)',
});
