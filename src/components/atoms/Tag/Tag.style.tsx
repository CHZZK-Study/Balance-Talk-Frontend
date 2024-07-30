import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const tag = css`
  display: flex;
  padding: 10px 18px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid ${color.MAIN};
  background-color: ${color.WT};
  ${typo.Main.SemiBold}
  color: ${color.MAIN};
  position: absolute;
  text-align: center;
  white-space: nowrap;
`;
