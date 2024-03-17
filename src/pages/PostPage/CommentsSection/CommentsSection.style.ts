import { Theme } from '@/styles/Theme';
import { css } from '@emotion/react';

export const commentsSectionWrapper = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const commentCountWrapper = css({
  fontSize: `${Theme.heading.medium.fontSize}`,
  lineHeight: `${Theme.heading.large.lineHeight}`,
});

export const inputSectionWrapper = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignContent: 'center',
  alignItems: 'center',
  backgroundColor: `${Theme.color.gray100}`,
  borderRadius: '15px',
  padding: '0.8rem 1rem',
  borderBottom: `2px solid ${Theme.color.gray300}`,
  boxShadow: `0 0 5px ${Theme.color.blue}`,
});

export const inputButtonWrapper = css({
  border: 'none',
  backgroundColor: 'transparent',
  color: `${Theme.color.blue}`,
});

export const commentsListSectionWrapper = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  borderRadius: '1rem',
  padding: '1rem',
  maxHeight: '100%',
});

export const commentsWrapper = css({
  maxHeight: '100%',
  background: `#9bbbd4`,
});

export const commentPaginationWrapper = css({
  display: 'flex',
  justifyContent: 'center',
});
