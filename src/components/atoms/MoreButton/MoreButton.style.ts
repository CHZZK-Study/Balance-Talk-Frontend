import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';
import type { MoreButtonProps } from './MoreButton';

export const moreButtonStyling = css(typo.Main.Medium, {
  display: 'flex',
  alignItems: 'center',
  gap: '7px',
  cursor: 'pointer',
});

export const getTextColor = (icon: Required<MoreButtonProps>['icon']) => {
  if (icon === 'plus')
    return css({
      color: color.GY[1],
    });

  return css({
    color: color.MAIN,
  });
};
