import { css } from '@emotion/react';
import { Theme } from '../../styles/Theme';

export const loginContainer = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '700px',
  padding: '100px',
  background: Theme.color.gray100,
});

export const inputContainer = css({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '20px',
});

export const btnLogin = css({
  marginTop: '10px',
  borderRadius: '50px',
});

export const linkContainer = css({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '20px',
  gap: '10px',
});
