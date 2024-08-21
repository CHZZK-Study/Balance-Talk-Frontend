import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const container = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 16px;
  border-radius: 10px;
  background-color: ${color.GY[3]};
  gap: 8px;
  width: auto;
  height: 34px;
`;

export const label = css`
  ${typo.Comment.SemiBold_16}
  color: ${color.GY[1]};
  text-align: center;
`;

export const count = css`
  text-align: center;
  ${typo.Number.Medium_16}
  color: ${color.MAIN};
`;
