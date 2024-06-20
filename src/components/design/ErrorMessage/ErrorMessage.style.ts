import color from '@/styles/color';
import typo from '@/styles/typo';
import { css } from '@emotion/react';
import type { ErrorMessageProps } from './ErrorMessage';

export const getTextStyling = (
  isError: Required<ErrorMessageProps>['isError'],
) =>
  css(typo.Body.Medium_5, {
    color: isError ? color.Red[500] : color.Neutral[50],
  });
