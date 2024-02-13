import { css } from '@emotion/react';
import { Theme } from '../../styles/Theme';

export const signupContainer = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '800px',
  height: '100%',
  padding: '70px 0px',
  background: Theme.color.gray100,
  overflow: 'auto',
});

export const inputContainer = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  padding: '20px',
});

export const btnContainer = css({
  display: 'flex',
  justifyContent: 'space-between',
  width: '60%',
  gap: '50px',
});

export const btnSignup = css({
  width: '100%',
  borderRadius: '50px',
});
