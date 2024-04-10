import { css } from '@emotion/react';

export const balanceOptionCardWrapper = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  gap: '1rem',
});
export const balanceOptionWrapper = css({
  position: 'relative',
});

export const checkIconWrapper = css({
  width: '100%',
  height: '100%',
});

export const backgroundWrapper = css({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  zIndex: '1',
});

export const innerButtonWrapper = css({
  display: 'flex',
  position: 'relative',
  ':hover': {
    cursor: 'pointer',
  },
});
export const winnerIconWrapper = css({
  position: 'absolute',
  right: 0,
  zIndex: '100',
});

export const balanceOptionTitleWrapper = css({
  display: 'flex',
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: '32px',
  width: '400px',
  height: '100px',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  wordBreak: 'break-all',
  padding: '10px 0',
});

export const balanceOptionImageWrapper = css({
  width: '400px',
  height: '350px',
  backgroundColor: '#ADADAD',
  fontFamily: 'SpoqaHanSansNeo-Medium',
  textAlign: 'center',
  alignItems: 'center',
  fontSize: '2rem',
});

export const balanceOptionDescriptionWrapper = css({
  display: 'flex',
  backgroundColor: '#D9D9D9',
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: '1.2rem',
  borderRadius: '1rem',
  padding: '1.5rem 1rem',
  width: '400px',
  height: '120px',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  wordBreak: 'break-all',
});
