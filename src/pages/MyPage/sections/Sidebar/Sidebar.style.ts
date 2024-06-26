import { css } from '@emotion/react';
import { Theme } from '../../../../styles/theme';

export const sidebarContainer = css({
  display: 'flex',
});

export const sidebarInnerContainer = css({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  padding: '0px 50px',
});

export const sidebarTabContainer = css({
  '& svg': {
    width: '25px',
    height: '25px',
    fill: Theme.color.gray400,
  },
});
