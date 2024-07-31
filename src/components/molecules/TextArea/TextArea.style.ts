import { css } from '@emotion/react';
import typo from '@/styles/typo';
import color from '@/styles/color';

export const textareaContainer = css`
  position: relative;
  border: 1px solid #f4f4f4;
  border-radius: 10px;
  padding: 15px 30px 20px 35px;
  display: flex;
  flex-direction: column;
`;

export const getContainerSizeStyling = (size: 'large' | 'medium') => {
  const style = {
    large: css`
      width: 1175px;
      height: 160px;
    `,
    medium: css`
      width: 1015px;
      height: 130px;
    `,
  };
  return style[size];
};

export const replyTextarea = css`
  width: 100%;
  border: none;
  ${typo.Main.Medium}
  color: ${color.BK};
  resize: none;
  flex: 1;
`;

export const getTextareaSizeStyling = (size: 'large' | 'medium') => {
  const style = {
    large: css`
      &::placeholder {
        ${typo.Comment.Regular}
        color: #b9b9b9;
      }
    `,
    medium: css`
      &::placeholder {
        ${typo.Comment.SemiBold}
        color: #b9b9b9;
      }
    `,
  };
  return style[size];
};

export const replyFooter = css`
  display: flex;
  gap: 27px;
  align-items: center;
  justify-content: flex-end;
  width: auto;
  margin-top: 10px;
`;

export const replyCount = css`
  ${typo.Comment.SemiBold}
  color: #929292;
`;
