import { css } from '@emotion/react';

import { Theme } from '../../../styles/Theme';

import type { ButtonProps } from './Button';

export const getVariantStyling = (
  variant: Required<ButtonProps>['variant'],
) => {
  const style = {
    default: css({
      backgroundColor: Theme.color.colorHunt_yellow,
      color: Theme.color.black,
    }),
    outline: css({
      backgroundColor: Theme.color.white,
      color: Theme.color.black,
      outline: `1px solid ${Theme.color.black}`,

      '&:hover:enabled': {
        outline: `1px solid ${Theme.color.red}`,
        color: Theme.color.red,
      },
    }),

    cancel: css({
      backgroundColor: Theme.color.gray300,
      color: Theme.color.black,
    }),
  };

  return style[variant as keyof typeof style];
};

export const getSizeStyling = (size: Required<ButtonProps>['size']) => {
  const style = {
    large: css({
      padding: '14px 16px',
      fontSize: Theme.text.medium.fontSize,
      lineHeight: Theme.text.medium.lineHeight,
    }),
    medium: css({
      padding: '12px 16px',
      fontSize: Theme.text.medium.fontSize,
      lineHeight: Theme.text.medium.lineHeight,
    }),
    small: css({
      padding: '8px 12px',
      fontSize: Theme.text.small.fontSize,
      lineHeight: Theme.text.small.lineHeight,
    }),
    xSmall: css({
      padding: '6px 10px',
      fontSize: Theme.text.xSmall.fontSize,
      lineHeight: Theme.text.xSmall.lineHeight,
    }),
  };

  return style[size];
};

export const buttonStyling = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',
  borderRadius: '5px',
  fontWeight: 'bold',
  transition: 'all .2s ease-in',
  cursor: 'pointer',

  '&:disabled': {
    opacity: '.4',
  },

  '&:hover:enabled': {
    filter: 'brightness(110%)',
  },
});
