import { css, keyframes } from '@emotion/react';

export const headingWrapper = css({
  position: 'relative',
  marginBottom: '20px',
  left: '20vw',
});

export const inputTitleWrapper = css({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
  flexDirection: 'column',
  alignItems: 'center',
});

export const etcButtonContainer = css({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
});

export const etcButtonWrapper = css({
  display: 'flex',
  justifyContent: 'space-between',
  width: '60%',
});

export const tagContainer = css({
  display: 'flex',
  justifyContent: 'center',
});

export const tagWrapper = css({
  display: 'flex',
  justifyContent: 'flex-start',
  width: '60%',
});

export const createFormContainer = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const versusText = css({
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: '50px',
  position: 'absolute',
  zIndex: 1,
  WebkitTextStroke: '1px white',
  textShadow: '0px 4px 4px gray',
});

export const shakeAnimation = keyframes({
  '0%': {
    transform: 'translateX(0)',
  },
  '25%': {
    transform: 'translateX(-4px)',
  },
  '50%': {
    transform: 'translateX(4px)',
  },
  '75%': {
    transform: 'translateX(-4px)',
  },
  '100%': {
    transform: 'translateX(0px)',
  },
});
