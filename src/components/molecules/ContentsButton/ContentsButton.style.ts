import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const cardWrapper = css`
  width: 563px;
  height: 357px;
  border-radius: 20px;
  border: 1px solid #dedede;
  background-color: ${color.WT};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition:
    transform 0.2s,
    background-color 0.2s,
    box-shadow 0.2s;

  &:active {
    background-color: ${color.WT};
    box-shadow: 0 5px 15px 0 rgba(119, 130, 255, 0.7);
    transform: scale(0.98);
  }

  &:hover {
    & > div > img {
      transform: scale(1.05);
    }
  }
`;

export const imageContainer = css`
  display: flex;
  //position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const imageWrapper = css`
  flex: 1;
  overflow: hidden;
  position: relative;
`;

export const image = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.2s ease-in-out;
`;

export const chipsContainer = css`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  gap: 10px;
`;

export const infoContainer = css`
  height: 107px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const label = css({
  ...typo.Component.Medium,
  color: color.BK,
  maxWidth: '440px',
});

export const bookmarkWrapper = css`
  margin-left: auto;
`;
