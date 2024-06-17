import { css } from '@emotion/react';

export const imageContainer = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const imageWrapper = css({
  width: '200px',
  height: '200px',
  marginRight: '10px',
  boxShadow: '0px 4px 4px gray',
  borderRadius: '5px',
});

export const versusText = css({
  fontSize: '48px',
  position: 'absolute',
  zIndex: 1,
  WebkitTextStroke: '1px white',
  textShadow: '0px 4px 4px gray',
});

export const imageTextWrapper = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '30px',
  textAlign: 'center',
});
