import { css } from '@emotion/react';
import { Theme } from '../../../styles/Theme';

export const paginavigationContainer = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: `20px 0px `,
});

export const pageBoxStyling = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '30px',
  height: '30px',
  borderRadius: '10%',
  outline: `1px solid ${Theme.color.gray300}`,

  transition: 'all .1s ease-in',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: Theme.color.gray300,
  },
});

export const pageSelectedBoxStyling = css({
  backgroundColor: Theme.color.colorHunt_gray,
  color: Theme.color.white,

  '&:hover': {
    backgroundColor: Theme.color.colorHunt_gray,
  },
});
