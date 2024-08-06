import { css } from '@emotion/react';
import typo from '@/styles/typo';

export const containerStyle = css({
  width: '1158px',
});

export const titleWrapStyle = css(typo.Title, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
});

export const contentStyle = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '20px',
});

export const loadMoreWrapperStyle = css({
  gridColumn: '1 / -1',
  display: 'flex',
  justifyContent: 'center',
  padding: '62px 0 95px 0',
});
