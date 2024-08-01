import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const MainContainer = css`
  display: flex;
  flex-direction: column;
  max-width: 1175px;
  max-height: 368px;
  width: 1175px;
  height: 368px;
`;

export const commentContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  //justify-content: center;
  //justify-items: center;
  width: 1175px;
  max-width: 1175px;
  height: 131px;
  border-top: 1px solid ${color.GY[2]};
`;

export const profileImage = css`
  width: 55px;
  height: 55px;
  margin-right: 15px;
  align-items: center;
`;

export const commentWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-grow: 1;
`;

export const commentBox = css`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  padding-left: 3px;
`;

export const nickname = css`
  ${typo.Comment.SemiBold}
  color: ${color.BK};
`;

export const createdTime = css`
  ${typo.Comment.Regular}
  color: #67727E;
`;

export const commentText = css`
  width: 100%;
  flex-shrink: 0;
  ${typo.Comment.Regular}
  color: #505050;
`;

export const sideWrapper = css`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-right: 18px;
`;

export const sideBox = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const replyButton = css`
  ${typo.Comment.SemiBold}
  background: none;
  border: none;
  color: ${color.GY[1]};
  cursor: pointer;
  margin-right: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

export const replyForm = css`
  display: flex;
  width: 1175px;
  height: 237px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid ${color.GY[2]};
`;
