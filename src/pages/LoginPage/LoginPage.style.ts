import { css } from '@emotion/css';
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
  width: '400px',
  padding: '100px',
  background: Theme.color.gray100,
});

export const inputContainer = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  padding: '20px',
});
