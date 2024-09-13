import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const profileLabelContainer = css({
  display: 'flex',
  alignItems: 'center',
});

export const profileBadgeStyling = css({
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  marginRight: '8px',
  backgroundColor: color.MAIN,
});

export const labelStyling = css(typo.Main.SemiBold, {
  color: color.BK,
  whiteSpace: 'nowrap',
});
