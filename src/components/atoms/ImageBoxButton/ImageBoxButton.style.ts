import { css } from '@emotion/react';
import color from '@/styles/color';

export const imageContainer = css`
  display: flex;
  width: 577px;
  height: 359px;
  padding: 129px 238px;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  border: 1px solid ${color.GY[2]};
  background-color: ${color.WT};
  box-shadow: 1px 2px 15px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
`;

export const defaultImageBox = css`
  display: flex;
  width: 100px;
  height: 100px;
  padding: 20px 30px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 1px solid ${color.GY[2]};
  background-color: ${color.GY[2]};
  box-shadow: 1px 2px 30px 0 rgba(0, 0, 0, 0.15);
`;

export const iconStyle = css`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  color: ${color.GY[1]};
`;

export const uploadedImage = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const fileInput = css`
  display: none;
`;
