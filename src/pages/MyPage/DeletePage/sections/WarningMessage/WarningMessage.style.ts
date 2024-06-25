import { css } from '@emotion/react';
import { Theme } from '../../../../../styles/theme';

export const warningMessageContainer = css({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const waringMessageTextStyling = css({
  color: Theme.color.red,
  fontSize: Theme.text.xSmall.fontSize,
  lineHeight: Theme.text.xSmall.lineHeight,
  fontWeight: 600,
});
