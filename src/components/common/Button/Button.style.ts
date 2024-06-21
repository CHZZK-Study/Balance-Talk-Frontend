import color from '@/styles/color';
import typo from '@/styles/typo';
import { css } from '@emotion/react';
import type { ButtonProps } from './Button';

export const getVariantStyling = (
  variant: Required<ButtonProps>['variant'],
) => {
  const style = {
    solidPrimary: css({
      backgroundColor: color.Primary[400],
      color: color.Neutral[50],

      '&:hover:enabled': {
        backgroundColor: color.Primary[500],
      },
      '&:disabled': {
        backgroundColor: color.Neutral[100],
        color: color.Neutral[400],
      },
    }),
    solidNeutral: css({
      backgroundColor: color.Neutral[800],
      color: color.Neutral[600],
      opacity: '.4',

      '&:hover:enabled': {
        opacity: '.8',
      },
    }),
    outlinePrimary: css({
      backgroundColor: 'transparent',
      outline: `1px solid ${color.Primary[400]}`,
      color: color.Primary[400],

      '&:hover:enabled': {
        backgroundColor: color.Primary[400],
        color: color.Neutral[50],
      },
      '&:disabled': {
        outline: `1px solid ${color.Neutral[400]}`,
        color: color.Neutral[400],
      },
    }),
    outlineAssistive: css({
      backgroundColor: 'transparent',
      outline: `1px solid ${color.Neutral[800]}`,
      color: color.Neutral[600],

      '&:hover:enabled': {
        outline: `1px solid ${color.Neutral[700]}`,
        color: color.Neutral[400],
      },
      '&:disabled': {
        outline: `1px solid ${color.Neutral[400]}`,
        color: color.Neutral[400],
      },
    }),
  };

  return style[variant as keyof typeof style];
};

export const getSizeStyling = (size: Required<ButtonProps>['size']) => {
  const style = {
    large: css(typo.Body.SemiBold_3, {
      padding: '10px 24px',
      borderRadius: '8px',
      gap: '8px',
    }),
    small: css(typo.Body.Regular_1, {
      padding: '6px 10px',
      borderRadius: '6px',
      gap: '4px',
    }),
  };

  return style[size];
};

export const buttonStyling = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',
  whiteSpace: 'nowrap',
  transition: 'all .3s ease-in',
  cursor: 'pointer',

  '& svg': {
    width: '16px',
    height: '16px',
  },
});
