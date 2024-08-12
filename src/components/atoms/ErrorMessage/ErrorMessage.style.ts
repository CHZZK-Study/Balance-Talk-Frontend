import color from '@/styles/color';
import typo from '@/styles/typo';
import { css } from '@emotion/react';
import type { ErrorMessageProps } from './ErrorMessage';

export const getTextStyling = (
  isError: Required<ErrorMessageProps>['isError'],
) =>
  css(typo.Main.Medium, {
    color: isError ? color.RED : color.GY[1],
    marginTop: '8px',
  });
