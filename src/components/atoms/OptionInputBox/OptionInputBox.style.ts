import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const contentWrapStyle = (hasText: boolean, option: 'A' | 'B') => {
  let outline = `1px solid ${color.GY[2]}`;
  let boxShadowColor = 'rgba(0, 0, 0, 0.05)';

  if (hasText) {
    if (option === 'A') {
      outline = `1px solid ${color.RED}`;
    } else if (option === 'B') {
      outline = `1px solid ${color.BLUE}`;
    }
  }

  if (hasText) {
    if (option === 'A') {
      boxShadowColor = 'rgba(0, 0, 0, 0.05)';
    } else if (option === 'B') {
      boxShadowColor = 'rgba(0, 0, 0, 0.05)';
    }
  }

  return css(typo.SubTitle, {
    padding: '30.5px 29px 32.5px 63px',
    backgroundColor: color.WT,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    outline: `${outline}`,
    boxShadow: `1px 2px 15px ${boxShadowColor}`,
    borderRadius: '20px',
    width: '517px',
    height: '80px',
  });
};

export const optionStyle = (option: 'A' | 'B') =>
  css({
    color: option === 'A' ? color.RED : color.BLUE,
    marginRight: '34px',
  });

export const textStyle = css({
  width: '373px',
  color: color.BK,
  '::placeholder': {
    color: color.GY[1],
  },
});
