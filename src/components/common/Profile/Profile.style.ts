import { css } from '@emotion/react';
import { Theme } from '../../../styles/Theme';

export const profileContainer = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const profileInfoContainer = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const profileText = css({
  fontWeight: '600',
  fontSize: Theme.text.medium.fontSize,
});
