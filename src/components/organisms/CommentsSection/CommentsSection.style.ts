import { css } from '@emotion/react';
import color from '@/styles/color';

export const commentsSectionContainer = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 1554px;
  height: 100%;
  margin: 0 auto;
  background-color: ${color.WT};
  overflow-y: auto;
`;

export const commentsWrapper = css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  list-style: none;
  padding: 0;
  margin: 0;
  min-height: 917px;
  height: auto;
`;

export const paginationWrapper = css`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  width: 100%;
  height: 40px;
  flex-shrink: 0;
`;
