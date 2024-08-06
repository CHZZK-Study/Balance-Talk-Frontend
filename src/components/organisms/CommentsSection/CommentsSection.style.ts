import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const commentsSectionContainer = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 1554px;
  height: 100%;
  margin: 0 auto;
  background-color: #fff;
  overflow-y: auto; /* 세로 스크롤 가능하도록 설정 */
`;

export const commentsWrapper = css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  list-style: none;
  padding: 0;
  margin: 0;
  height: auto; /* 높이를 자동으로 설정하여 무한히 확장 가능 */
`;

export const paginationWrapper = css`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  width: 100%; /* 페이지네이션 너비를 전체로 설정 */
  flex-shrink: 0; /* 페이지네이션이 줄어들지 않도록 설정 */
`;
