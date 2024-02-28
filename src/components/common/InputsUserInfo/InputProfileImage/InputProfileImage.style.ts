import { css } from '@emotion/react';
import { Theme } from '../../../../styles/Theme';

export const profileImageSelectContainer = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  marginTop: '20px',
});

export const profileImageText = css({
  color: Theme.color.colorHunt_gray,
  fontSize: Theme.text.xSmall.fontSize,
});
