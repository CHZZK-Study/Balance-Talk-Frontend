import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const toggleButtonStyling = css({
  display: 'flex',
  borderRadius: '6px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
});

export const toggleButtonItemStyling = css(typo.Main.SemiBold, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px 23px',
  backgroundColor: color.WT,
  color: color.GY[1],
  outline: `1px solid ${color.GY[2]}`,
});

export const firstItemRadius = css({
  borderTopLeftRadius: '6px',
  borderBottomLeftRadius: '6px',
});

export const secondItemRadius = css({
  borderTopRightRadius: '6px',
  borderBottomRightRadius: '6px',
});

export const selectedStyling = css({
  backgroundColor: color.MAIN,
  color: color.WT,
  border: 'none',
});
