import { css } from '@emotion/react';

export const uploaderContainerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '1069px',
  height: '102px',
  position: 'relative',
  overflow: 'visible',
});

export const imageContainerStyle = css({
  display: 'flex',
  columnGap: '8px',
  overflowX: 'auto',
  scrollBehavior: 'smooth',
  width: '100%',
  height: '100%',
});

export const arrowButtonStyle = (position: string) =>
  css({
    position: 'absolute',
    top: '50%',
    [position]: '0',
    transform: 'translateY(-50%)',
    border: 'none',
    padding: '8px',
    cursor: 'pointer',
    zIndex: 1,
  });
