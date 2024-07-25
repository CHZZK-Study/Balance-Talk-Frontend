import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const chipsStyling = css(typo.Main.SemiBold, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px 18px',
  width: 'fit-content',
  backgroundColor: color.WT,
  color: color.MAIN,
  outline: `1px solid ${color.MAIN}`,
  borderRadius: '12px',
});
