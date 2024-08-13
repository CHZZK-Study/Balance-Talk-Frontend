import { css } from '@emotion/react';

export const profileWrapper = (size: 'small' | 'large') =>
  css({
    width: size === 'small' ? '40px' : '142px',
    height: size === 'small' ? '40px' : '142px',
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
