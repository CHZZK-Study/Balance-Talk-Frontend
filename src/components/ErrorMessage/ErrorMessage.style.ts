import { css } from '@emotion/react';

import type { ErrorMessageProps } from './ErrorMessage';

import { Theme } from '../../styles/Theme';

export const getTextStyling = (
  isError: Required<ErrorMessageProps>['isError'],
) =>
  css({
    fontSize: Theme.text.small.fontSize,
    lineHeight: Theme.text.small.lineHeight,
    color: isError ? Theme.color.red : Theme.color.green,
  });
