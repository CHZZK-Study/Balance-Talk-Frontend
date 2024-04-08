import { Theme } from '@/styles/Theme';
import { css } from '@emotion/react';

export const deleteCommentModalWrapper = css({
  position: 'fixed',
  top: '50%',
  left: '50%',
  display: 'flex',
  padding: '50px 40px',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '40px',
  borderRadius: '10px',
  background: 'white',
  zIndex: '300',
  transform: `translate(-50%, -50%)`,
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
