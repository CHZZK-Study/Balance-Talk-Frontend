import { css } from '@emotion/react';
import { Theme } from '../../../styles/Theme';

export const sidebarContainer = css({
  display: 'flex',
});

export const sidebarInnerContainer = css({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  padding: '0px 50px',
});

export const sidebarNavContainer = css({
  '& svg': {
    width: '20px',
    height: '20px',
    fill: Theme.color.gray400,
  },
});