import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const container = css`
  position: relative;
  display: inline-block;
`;

export const dotButton = css`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding-right: 4px;
  padding-left: 4px;
`;

export const icon = css`
  width: auto;
  height: auto;
`;

export const menu = css`
  position: absolute;
  top: 100%;
  left: 50%;
  width: 86px;
  transform: translateX(-50%);
  background-color: ${color.WT};
  border: 1px solid ${color.GY[2]};
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  margin-top: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const menuItem = css`
  ${typo.Comment.SemiBold}
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  background-color: ${color.WT};
  border: none;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: ${color.Neutral[200]};
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid ${color.GY[2]};
  }
`;
