import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const containerStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
});

export const letterStyle = css(typo.Title, {
  color: color.GY[1],
  position: 'absolute',
  top: '80%',
  left: '59.5%',
  transform: 'translate(-50%, -50%)',
});
