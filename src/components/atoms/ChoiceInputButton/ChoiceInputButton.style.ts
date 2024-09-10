import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const choiceInputContainer = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '578px',
  backgroundColor: color.GY[3],
  borderRadius: '20px',
  border: `1px solid ${color.GY[2]}`,
});

export const choiceInputWithText = (withText: boolean, option: 'A' | 'B') => {
  if (!withText) {
    return css({});
  }

  const style = {
    A: css({
      border: `1px solid ${color.RED}`,
      backgroundColor: color.WT,
    }),
    B: css({
      border: `1px solid ${color.BLUE}`,
      backgroundColor: color.WT,
    }),
  };

  return style[option];
};

export const choiceInputWrapper = css({
  display: 'flex',
  justifyContents: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '20px',
  gap: '17px',
});

export const choiceInputStyling = css(typo.Main.Medium, {
  width: '100%',
  height: '34px',
  paddingLeft: '10px',
  color: color.BK,
});
