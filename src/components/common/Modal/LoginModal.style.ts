import { Theme } from '@/styles/Theme';
import { css } from '@emotion/react';

export const LoginModalWrapper = css({
  position: 'fixed',
  top: '50%',
  left: '38%',
  display: 'flex',
  padding: '30px 20px',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  borderRadius: '10px',
  background: 'white',
  zIndex: '300',
});

export const titleWrapper = css({
  display: 'flex',
  justifyContent: 'center',
  fontSize: Theme.heading.medium.fontSize,
  fontWeight: Theme.heading.medium.lineHeight,
});

export const btnsWrapper = css({
  display: 'flex',
  gap: '20px',

  '& button': {
    border: 'none',
  },
});
