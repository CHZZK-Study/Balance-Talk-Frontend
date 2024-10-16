import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const footerContainer = css`
  display: flex;
  flex-direction: column;
  background-color: ${color.BLUE_LIGHT};
  width: 100%;
  height: 427px;
  padding-left: 200px;
`;

export const footerWrapper = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const leftContainer = css`
  display: flex;
  flex-direction: column;
  width: auto;
`;

export const rightContainer = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 365px;
  gap: 16px;
  margin-right: 200px;
  margin-top: 70px;
`;

export const logoContainer = css`
  margin-top: 46px;
  margin-bottom: 20px;
`;

export const tagContent = css`
  display: flex;
  flex-direction: column;
  margin-left: 19px;
  margin-bottom: 26px;
`;

export const boldContent = css`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-left: 19px;
`;

export const textLabel = css`
  color: ${color.BK};
  ${typo.Comment.Regular}
`;

export const email = css`
  color: ${color.BK};
  ${typo.Comment.SemiBold}
`;

export const linkLabel = css`
  color: ${color.MAIN};
  cursor: pointer;
  ${typo.Main.SemiBold}
`;

export const subLabel = css`
  color: ${color.GY[1]};
  cursor: pointer;
  ${typo.Main.Medium}
  margin-top: 2px;
`;
