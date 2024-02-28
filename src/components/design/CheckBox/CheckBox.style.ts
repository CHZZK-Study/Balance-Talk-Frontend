import { css } from '@emotion/react';
import { Theme } from '../../../styles/Theme';

export const checkBoxContainer = css({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

export const checkBoxLabelStyling = css({
  marginLeft: '5px',
  fontSize: Theme.text.xSmall.fontSize,
});
