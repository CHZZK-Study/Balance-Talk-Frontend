import { css } from '@emotion/react';
import { Theme } from '../../../../styles/Theme';

export const tabStyling = (isSelected: boolean) =>
  css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    minWidth: 'max-content',
    padding: '12px 16px',

    fontSize: Theme.text.small.fontSize,
    lineHeight: Theme.text.small.lineHeight,

    transition: 'all .2s ease-in',

    cursor: 'pointer',

    borderBottom: `2px solid ${isSelected ? Theme.color.colorHunt_gray : 'transparent'}`,

    color: isSelected ? Theme.color.colorHunt_gray : Theme.color.gray300,

    '&:hover': {
      color: isSelected ? Theme.color.colorHunt_gray : Theme.color.gray400,
    },
  });
