import { Theme } from '@/styles/Theme';
import { css } from '@emotion/react';

export const CommentsSectionWrapper = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const commentCountWrapper = css({
  fontSize: `${Theme.heading.medium.fontSize}`,
  lineHeight: `${Theme.heading.large.lineHeight}`,
});

export const InputSectionWrapper = css({
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

export const InputButtonWrapper = css({
  border: 'none',
  backgroundColor: 'transparent',
  color: `${Theme.color.blue}`,
});

export const CommentsListSection = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  background: `${Theme.color.lightblue}`,
  borderRadius: '1rem',
  padding: '1rem',
});

export const commentPaginationWrapper = css({
  display: 'flex',
  justifyContent: 'center',
});
