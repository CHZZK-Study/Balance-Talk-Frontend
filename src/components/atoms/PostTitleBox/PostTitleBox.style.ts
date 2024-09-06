import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const boxStyle = css({
  width: '1174px',
  height: '80px',
  padding: '31.5px 44px 31.5px 63px',
  border: `1px solid ${color.GY[2]}`,
  backgroundColor: color.WT,
  borderRadius: '20px',
  display: 'flex',
  alignItems: 'center',
});

export const inputStyle = css(typo.SubTitle, {
  width: '1067px',
  color: color.BK,
  '::placeholder': {
    color: color.GY[1],
  },
});
