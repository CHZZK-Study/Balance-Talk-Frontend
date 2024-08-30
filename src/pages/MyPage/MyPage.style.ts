import { css } from '@emotion/react';
import color from '@/styles/color';

export const pageContainer = css`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${color.WT}; /* 백그라운드 색상 설정 */
  overflow: hidden; /* 스크롤바 제거 */
`;

export const contentWrapper = css`
  display: flex;
  flex-direction: column;
  width: calc(100% - 250px); /* 사이드바 너비만큼 뺀 영역 */
  padding: 20px;
  overflow-y: auto; /* 세로 스크롤 허용 */
`;

export const contentList = css`
  margin-top: 20px;
  background-color: ${color.WT};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 박스 그림자 추가 */
`;

export const optionBarWrapper = css`
  width: 100%;
  background-color: ${color.WT}; /* 배경 색상 */
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${color.GY[2]}; /* 하단 경계선 */
`;

export const sideBarWrapper = css`
  width: 250px; /* 사이드바 너비 설정 */
  padding: 20px;
  background-color: ${color.WT};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid ${color.GY[2]}; /* 우측 경계선 */
  overflow-y: auto; /* 스크롤 허용 */
`;
