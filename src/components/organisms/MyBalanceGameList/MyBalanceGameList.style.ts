import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const container = css`
  width: 100%;
  box-sizing: border-box;
`;

export const dateWrapper = css`
  margin-bottom: 15px;
`;

export const dateLabel = css`
  width: 546px;
  height: 26px;
  ${typo.Comment.Regular_16};
  color: ${color.GY[1]};
  margin-bottom: 2px;
  display: block;
  padding-left: 11px;
`;

export const contentList = css`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const contentItem = css`
  flex: 1 1 calc(50% - 10px);
  margin-bottom: 10px;
  box-sizing: border-box;

  &:nth-of-type(odd) {
    margin-right: 10px;
  }
`;
