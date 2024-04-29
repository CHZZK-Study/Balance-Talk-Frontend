import { css } from '@emotion/react';

export const headerContainer = css({
  display: 'grid',
  gridTemplateColumns: `repeat(3, 1fr)`,
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100vw',
  background: '#222831',
  height: 'auto',
  textAlign: 'center',
  padding: '0 20px',
});

export const logoContainer = css({
  display: 'flex',
  padding: '10px 0',
});

export const logoNameContainer = css({
  fontSize: '1.5rem',
  fontFamily: 'SpoqaHanSansNeo-medium',
  textAlign: 'center',
  color: 'white',
  cursor: 'pointer',
});

export const headerBtnContainer = css({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '1rem',
  fontSize: '1rem',
  fontFamily: 'SpoqaHanSansNeo-medium',
});
