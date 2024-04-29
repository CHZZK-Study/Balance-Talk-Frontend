import { css } from '@emotion/react';

export const postListContainer = css({
  width: '80vw',
  margin: '0 auto',
  height: '100%',
});

export const headingWrapper = css({
  display: 'flex',
  justifyContent: 'space-between',
  width: '80%',
  margin: '0 auto',
  alignItems: 'center',
});

export const postListInnerContainer = css({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
});

export const postListWrapper = css({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridGap: '50px',
});
