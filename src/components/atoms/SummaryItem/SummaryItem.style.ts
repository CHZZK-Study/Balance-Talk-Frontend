import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const summaryItemStyling = css(typo.SubTitle, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px 30px',
  gap: '29px',
  backgroundColor: color.WT,
  color: color.BK,
  borderRadius: '30px',
  boxShadow: '1px 2px 10px rgba(0, 0, 0, 0.07)',
});

export const numberItemStyling = css(typo.Number.Medium_18, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,
  width: '24px',
  height: '24px',
  backgroundColor: color.MAIN,
  color: color.WT,
  borderRadius: '50%',
});
