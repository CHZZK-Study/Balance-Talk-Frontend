import { css } from '@emotion/react';

import type { InputProps } from './Input';

import { Theme } from '../../styles/Theme';

export const inputContainerStyling = css({
  display: 'flex',
  alignItems: 'center',
  gap: '30px',
});

export const inputWrapperStyling = (isError: Required<InputProps>['isError']) =>
  css({
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    paddingTop: 0,
    paddingBottom: 0,
    margin: '10px 0px',
    backgroundColor: Theme.color.gray200,
    borderRadius: '5px',
    transition: 'all .2s ease-in',

    '&:focus-within': {
      backgroundColor: Theme.color.white,
      boxShadow: `0 0 0 1px ${Theme.color.gray200}`,
    },

    '& svg': {
      width: '30px',
      height: '30px',
    },
  });

export const getSizeStyling = (size: Required<InputProps>['size']) => {
  const style = {
    large: css({
      padding: '14px 16px',
      fontSize: Theme.text.medium.fontSize,
      lineHeight: Theme.text.medium.lineHeight,
    }),

    medium: css({
      padding: '12px 16px',
      fontSize: Theme.text.medium.fontSize,
      lineHeight: Theme.text.medium.lineHeight,
    }),

    small: css({
      padding: '8px 12px',
      fontSize: Theme.text.small.fontSize,
      lineHeight: Theme.text.small.lineHeight,
    }),
  };

  return style[size];
};

export const getInputStyling = css({
  width: '400px',
  paddingLeft: 0,
  paddingRight: 0,
  border: 'none',
  borderRadius: '10px',
  outline: 0,
  backgroundColor: 'transparent',
});
