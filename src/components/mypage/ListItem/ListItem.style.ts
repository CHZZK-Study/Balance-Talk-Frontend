import { css } from '@emotion/react';
import { Theme } from '../../../styles/theme';
import { Size } from '../../../types/theme';

export const mypageListItemContainer = css({
  display: 'flex',
  alignItems: 'center',
  padding: '10px 0px',
  borderBottom: `1px solid ${Theme.color.gray200}`,
});

export const mypageTextStyling = (size: Extract<Size, 'xSmall' | 'small'>) => {
  const style = {
    xSmall: {
      fontSize: Theme.text.xSmall.fontSize,
      lineHeight: Theme.text.xSmall.lineHeight,
      color: Theme.color.gray400,
    },
    small: {
      fontSize: Theme.text.small.fontSize,
      lineHeight: Theme.text.small.lineHeight,
      color: Theme.color.colorHunt_black,
    },
  };
  return style[size];
};

export const hoverStyling = css({
  '&:hover': {
    cursor: 'pointer',
    textDecoration: `1px underline ${Theme.color.colorHunt_black}`,
  },
});

export const noContainer = css({
  width: '40px',
  marginRight: '20px',
  textAlign: 'end',
});

export const withoutNoContainer = css({});

export const myPostContainer = css({
  display: 'flex',
  justifyContent: 'space-between',
  width: '80%',
});

export const deleteWrapper = css({
  margin: 'auto 0',
  cursor: 'pointer',
});
