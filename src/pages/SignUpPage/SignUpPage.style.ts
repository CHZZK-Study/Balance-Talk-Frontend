import { css } from '@emotion/react';
import { Theme } from '../../styles/Theme';

export const container = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const loginContainer = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '800px',
  padding: '100px',
  background: Theme.color.gray100,
});

export const inputContainer = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  padding: '20px',
});

export const inputButtonContainer = css({
  display: 'flex',
});
