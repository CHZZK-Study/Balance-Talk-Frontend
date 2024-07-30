import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const categoryButtonStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 367px;
  height: 189px;
  gap: 10px;
  padding: 43px 92px;
  border-radius: 20px;
  border: 1px solid #dedede;
  background-color: ${color.WT};
  box-shadow: 1px 1px 15px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const imgWrap = css`
  flex-shrink: 0;
`;

export const labelStyle = css`
  ${typo.SubTitle}
`;

// export const spacer = css`
//   flex-grow: 1;
// `;
