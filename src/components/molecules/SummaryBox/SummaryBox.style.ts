import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const summaryBoxStyling = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '748px',
  padding: '30px',
  gap: '26px',
  borderRadius: '10px',
  backgroundColor: '#F2F3FF',
});

export const summaryTextStyling = css(typo.SubTitle, {
  color: color.BK,
});

export const summaryWrapperStyling = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '17px',
});
