import { css } from '@emotion/react';
import color from '@/styles/color';

export const profileLabelContainer = css({
  display: 'flex',
  alignItems: 'center',
});

export const profileBadgeStyling = (badgeUrl?: string) => css`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: ${badgeUrl ? '#FFFFFF' : color.MAIN};
  ${badgeUrl ? 'object-fit: cover; overflow: hidden;' : ''}
`;
