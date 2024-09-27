import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const MainContainer = css`
  display: flex;
  flex-direction: column;
  width: 1175px;
`;

export const myCommentColor = css`
  background-color: ${color.WT_VIOLET};
`;

export const commentContainer = css`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 30px 10px 30px 27px;
  gap: 20px;
  border-top: 1px solid ${color.GY[2]};
`;

export const profileWrapper = css`
  display: flex;
`;

export const commentInfoWrapper = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export const commentTopWrapper = css`
  display: flex;
  justify-content: space-between;
`;

export const nickname = css`
  ${typo.Comment.SemiBold}
  color: ${color.BK};
`;

export const createdTime = css`
  ${typo.Comment.Regular}
  color: #67727E;
  margin-left: 30px;
`;

export const editedText = css`
  ${typo.Comment.Regular}
  color: ${color.MAIN};
  margin-left: 10px;
`;

export const commentTextWrapper = css`
  display: flex;
  width: 100%;
  padding-right: 20px;
  ${typo.Comment.Regular}
  color: #505050;
`;

export const commentBottomWrapper = css`
  display: flex;
  justify-content: space-between;
  padding-right: 15px;
`;

export const replyButton = css`
  display: flex;
  gap: 10px;
  ${typo.Comment.SemiBold}
  background: none;
  padding-top: 10px;
  color: ${color.GY[1]};
  cursor: pointer;
`;

export const replyContainer = css`
  display: flex;
  width: 100%;
  height: 210px;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  border-top: 1px solid ${color.GY[2]};
  padding-left: 85px;
`;

export const nicknameInput = css`
  margin-bottom: 12px;
  ${typo.Comment.SemiBold}
`;

export const toastModalStyling = css({
  position: 'fixed',
  top: '110px',
  left: '50%',
  transform: 'translate(-50%)',
  zIndex: '1000',
});

export const centerStyling = css({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: '1000',
});
