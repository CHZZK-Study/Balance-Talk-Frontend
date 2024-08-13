import { css } from '@emotion/react';
import typo from '@/styles/typo';
import color from '@/styles/color';

export const bestTalkPickContainer = css({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '30px',
  paddingBottom: '40px',
  borderRadius: '20px',
  border: `1px solid ${color.GY[2]}`,
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
});

export const bestTalkPickText = css(typo.Title, {
  padding: '0 40px',
  color: color.MAIN,
});
