import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const container = css`
  width: 904px;
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
  padding-left: 10px;
`;

export const contentList = css`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 20px;
  justify-content: flex-start;
`;

export const contentItem = css`
  width: 432px;
  box-sizing: border-box;

  &:nth-last-of-type(-n + 1):only-child {
    margin-right: auto;
  }
`;
