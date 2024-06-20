import color from '@/styles/color';
import typo from '@/styles/typo';
import { css } from '@emotion/react';
import type { InputProps } from './Input';

export const inputContainerStyling = css({
  display: 'flex',
  alignItems: 'center',
  gap: '30px',
});

export const inputWrapperStyling = css({
  display: 'flex',
  gap: '12px',
  alignItems: 'center',
  paddingTop: 0,
  paddingBottom: 0,
  margin: '10px 0px',
});

export const getVariantStyling = (variant: Required<InputProps>['variant']) => {
  const style = {
    default: css({
      backgroundColor: 'transparent',
      outline: `1px solid ${color.Neutral[800]}`,
      borderRadius: '8px',
    }),
  };

  return style[variant as keyof typeof style];
};

export const getSizeStyling = (size: Required<InputProps>['size']) => {
  const style = {
    medium: css(typo.Body.Medium_4, {
      padding: '10px 18px',
    }),
  };

  return style[size];
};

export const getInputStyling = css({
  paddingLeft: 0,
  paddingRight: 0,
  border: 'none',
  outline: 0,
  color: color.Neutral[50],
});
