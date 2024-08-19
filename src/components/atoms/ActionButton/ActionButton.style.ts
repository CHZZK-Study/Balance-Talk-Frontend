import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const actionButtonContainer = (isActive: boolean) =>
  css({
    display: 'flex',
    alignItems: 'center',
    width: `210px`,
    height: `40px`,
    padding: '4px 10px',
    gap: `10px`,
    borderRadius: '25px',
    backgroundColor: isActive ? color.MAIN : color.WT,
    border: `1px solid ${color.GY[3]}`,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    ':hover': {
      border: `1px solid ${color.MAIN}`,
    },
    ':active': {
      backgroundColor: color.MAIN,
    },
  });

export const actionButtonImage = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: `32px`,
  height: `32px`,
  flexShrink: 0,
});

export const actionButtonLabel = (isActive: boolean) =>
  css(typo.Comment.SemiBold, {
    color: isActive ? color.WT : color.BK,
    transition: 'color 0.3s ease',
  });
