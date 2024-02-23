import { css } from '@emotion/react';
import { Theme } from '../../../styles/Theme';

export const mypageListItemContainer = css({
  display: 'flex',
  alignItems: 'center',
  padding: '10px 0px',
  borderBottom: `1px solid ${Theme.color.gray200}`,
});

export const mypageTextXsmallStyling = css({
  fontSize: Theme.text.xSmall.fontSize,
  lineHeight: Theme.text.xSmall.lineHeight,
  color: Theme.color.gray400,
});

export const mypageTextSmallStyling = css({
  fontSize: Theme.text.small.fontSize,
  lineHeight: Theme.text.small.lineHeight,
  color: Theme.color.colorHunt_black,
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
