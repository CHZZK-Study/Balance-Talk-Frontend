import color from '@/styles/color';
import typo from '@/styles/typo';
import { css } from '@emotion/react';
import type { HeadingProps } from './Heading';

export const getSizeStyling = (type: Required<HeadingProps>['type']) => {
  const style = {
    1: css(typo.Heading_1),
    2: css(typo.Heading_2),
    3: css(typo.Heading_3),
    4: css(typo.Heading_4),
  };

  return style[type];
};

export const headingStyling = css({
  color: color.Neutral[50],
});
