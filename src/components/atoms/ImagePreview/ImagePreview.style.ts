import { css } from '@emotion/react';

export const previewContainerStyle = css({
  position: 'relative',
  width: '102px',
  height: '102px',
  borderRadius: '15px',
});

export const imageStyle = css({
  width: '100px',
  height: '100px',
  objectFit: 'cover',
});

export const buttonStyle = css({
  width: '14px',
  height: '14px',
  position: 'absolute',
  right: '3px',
  top: '-1px',
  cursor: 'pointer',
});
