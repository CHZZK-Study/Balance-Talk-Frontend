import { css } from '@emotion/react';
import typo from '@/styles/typo';

export const containerStyle = css({
  width: '1146px',
});

export const titleWrapStyle = css(typo.Title, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '22px',
});

export const paginationWrapStyle = css({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '60px',
  width: '100%',
  height: '40px',
  flexShrink: '0',
});
