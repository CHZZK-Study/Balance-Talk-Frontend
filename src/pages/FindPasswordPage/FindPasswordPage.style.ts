import { css } from '@emotion/react';
import { Theme } from '../../styles/Theme';

export const pwContainer = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '800px',
  padding: '100px 0px',
  background: Theme.color.gray100,
});

export const inputContainer = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  padding: '20px',
});
