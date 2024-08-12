import color from '@/styles/color';
import typo from '@/styles/typo';
import { css } from '@emotion/react';

export const signupContainer = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  padding: '30px 0px',
  gap: '30px',
  background: color.GY[3],
  overflow: 'auto',
});

export const signUpHeadingStyling = css(typo.Component.Bold, {
  color: color.BK,
});

export const inputContainer = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  width: '573px',
  gap: '15px',
});

export const btnContainer = css({
  display: 'flex',
  justifyContent: 'space-between',
  width: '384px',
  marginTop: '20px',
  gap: '20px',
});

export const btnSignup = css({
  width: '100%',
  borderRadius: '50px',
});
