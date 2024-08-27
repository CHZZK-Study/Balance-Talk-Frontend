import { css } from '@emotion/react';
import typo from '@/styles/typo';
import color from '@/styles/color';

export const pageStyle = css({
  width: '1176px',
  height: '1217px',
  margin: '64px 372px 78px 372px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
});

export const bestTalkPickStyling = css({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '56px',
});

export const bestTalkPickTextWrapper = css({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '35px',
});

export const bestTalkPickSubTitle = css(typo.SubTitle, {
  display: 'flex',
  fontWeight: 'bold',
  color: color.BK,
  marginBottom: '21px',
});

export const bestTalkPickTitle = css(typo.Title, {
  display: 'flex',
  color: color.BK,
});

export const toastModalStyling = css({
  position: 'absolute',
  top: '-150px',
});
