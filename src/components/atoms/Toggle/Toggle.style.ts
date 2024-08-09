import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const container = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border: 1px solid ${color.GY[2]};
  border-radius: 4px;
  background-color: ${color.WT};
  gap: 8px;
  width: max-content;
  height: max-content;
`;

export const label = css`
  ${typo.Main.Medium}
  color: ${color.BK};
  text-align: center;
`;

export const count = css`
  text-align: center;
  ${typo.Number.Medium_18}
  color: ${color.MAIN};
`;
