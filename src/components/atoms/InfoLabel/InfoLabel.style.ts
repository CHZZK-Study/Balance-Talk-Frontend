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
  width: max-content;
  height: 34px;
  box-sizing: border-box;
  flex-shrink: 0;
`;

export const label = css`
  display: inline-block;
  ${typo.Comment.SemiBold_16}
  color: ${color.GY[1]};
  text-align: center;
  width: max-content;
  height: auto;
  flex-shrink: 0;
`;

export const count = css`
  display: inline-block;
  text-align: center;
  ${typo.Number.Medium_16}
  color: ${color.MAIN};
  width: max-content;
  height: auto;
  flex-shrink: 0;
`;
