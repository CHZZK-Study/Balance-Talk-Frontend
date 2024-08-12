import { css } from '@emotion/react';
import color from '@/styles/color';

export const talkPickListContainer = css({
  display: 'flex',
  flexDirection: 'column',
  padding: '12px 0',
  borderTop: `1px solid ${color.GY[2]}`,
});

export const talkPickListWrapper = css({
  display: 'flex',
  flexDirection: 'column',
});
