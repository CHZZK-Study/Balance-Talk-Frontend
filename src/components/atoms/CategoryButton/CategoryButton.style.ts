import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const categoryButtonBaseStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 367px;
  height: 189px;
  padding: 40px 92px;
  border-radius: 20px;
  border: 1px solid #dedede;
  background-color: ${color.WT};
  box-shadow: 1px 1px 15px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease-in;
`;

export const imgWrap = css`
  flex-shrink: 0;
`;

export const labelStyle = css`
  ${typo.SubTitle}
  margin-top: auto;
`;
