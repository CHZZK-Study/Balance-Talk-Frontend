import { css } from '@emotion/react';
import typo from '@/styles/typo';
import color from '@/styles/color';

export const talkPickPlaceStyling = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '50px 0',
  gap: '80px',
});

export const bestTalkPickStyling = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '35px',
});

export const bestTalkPickTextWrapper = css({
  display: 'flex',
  flexDirection: 'column',
});

export const bestTalkPickSubTitle = css(typo.SubTitle, {
  display: 'flex',
  fontWeight: 'bold',
  color: color.BK,
});

export const bestTalkPickTitle = css(typo.Title, {
  display: 'flex',
  color: color.BK,
});
