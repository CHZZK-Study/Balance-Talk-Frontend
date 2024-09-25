import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const buttonStyle = css`
  display: flex;
  flex-direction: column;
  width: 315px;
  padding: 17px 0;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background-color: ${color.WT};
  border: 1px solid ${color.GY[2]};
  border-radius: 20px;
  box-shadow: 1px 2px 7px 0 rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    border: 1px solid ${color.MAIN};
  }
`;

export const buttonLabelStyle = css`
  height: 26px;
  align-self: stretch;
  color: ${color.MAIN};
  text-align: center;
  ${typo.Comment.Regular_16};
`;

export const iconWrapper = css`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const iconStyle = css`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  color: ${color.GY[1]};
`;

export const iconLabelStyle = css`
  color: ${color.GY[1]};
  ${typo.Main.SemiBold_16};
`;
