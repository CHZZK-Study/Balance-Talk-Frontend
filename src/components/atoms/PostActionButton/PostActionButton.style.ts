import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const buttonWrapStyle = (action: 'save' | 'submit') =>
  css(typo.Main.SemiBold, {
    width: '300px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    padding: action === 'save' ? '15.5px 105.5px' : '15.5px 120px',
    borderRadius: '4px',
    color: action === 'save' ? color.MAIN : color.WT,
    outline: `1px solid ${color.MAIN}`,
    backgroundColor: action === 'save' ? color.WT : color.MAIN,
  });
