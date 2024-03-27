import { css } from '@emotion/react';

export const repliesSectionWrapper = (isAlignLeft: boolean) =>
  css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: `${isAlignLeft ? 'flex-start' : 'flex-end'}`,
    marginRight: `${!isAlignLeft && '20px'}`,
    marginLeft: `${isAlignLeft && '20px'}`,
    // gap: '0.8rem',
  });

export const repliesListSectionWrapper = css({
  display: 'flex',
  flexDirection: 'column',
  // gap: '1rem',
  borderRadius: '1rem',
  padding: '0 1rem',
  maxHeight: '100%',
});

export const repliesWrapper = css({
  maxHeight: '100%',
});

export const commentPaginationWrapper = css({
  display: 'flex',
  justifyContent: 'center',
});
