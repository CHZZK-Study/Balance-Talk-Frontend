import { css } from '@emotion/react';

export const profileWrapper = css({
  width: '32px',
  height: '32px',
  borderRadius: '600px',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: `linear-gradient(135deg, #7B67F2 0%, #AFFF48 100%)`,
  backgroundClip: 'content-box, border-box',
});

export const profileImage = css({
  width: '29px',
  height: '29px',
  objectFit: 'cover',
  borderRadius: '600px',
  backgroundColor: '#ffffff',
});
