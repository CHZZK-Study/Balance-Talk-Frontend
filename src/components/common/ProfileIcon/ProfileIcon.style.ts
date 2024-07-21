import { css } from '@emotion/react';

export const profileWrapper = css({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  overflow: 'hidden',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  cursor: 'pointer',
});

export const profileImage = css({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
