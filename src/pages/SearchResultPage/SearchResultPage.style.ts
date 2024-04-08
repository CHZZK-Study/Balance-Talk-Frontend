import { css } from '@emotion/react';

export const headingWrapper = css({
  display: 'flex',
  justifyContent: 'space-between',
  width: '80%',
  margin: '0 auto',
  alignItems: 'center',
});

export const postListWrapper = css({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridGap: '50px',
  // width: '90%',
  // justifyContent: 'space-between',
  // flexWrap: 'wrap',
  // margin: '0 auto',
});
