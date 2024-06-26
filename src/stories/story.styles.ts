import color from '@/styles/color';
import { css } from '@emotion/react';

export const storyContainer = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const storyInnerContainer = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  alignItems: 'flex-start',
});

export const storyInnerRowContainer = css({
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
  alignItems: 'flex-start',
});

export const darkMode = css({
  backgroundColor: color.Neutral[700],
});
