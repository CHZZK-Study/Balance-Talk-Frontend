import { Theme } from '@/styles/Theme';
import { css } from '@emotion/react';

export const notfoundContainer = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
});

export const notfoundDescriptStyling = css({
  fontSize: Theme.text.small.fontSize,
  color: Theme.color.gray400,
  marginTop: '20px',
});
