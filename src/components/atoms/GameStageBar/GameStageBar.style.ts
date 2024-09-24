import { css } from '@emotion/react';
import color from '@/styles/color';

export const stageBarContainer = css({
  display: 'flex',
  gap: '8px',
});

export const stageBarStyling = css({
  width: '34px',
  height: '7px',
  borderRadius: '20px',
});

export const getStageBarColor = (currentStage: boolean) => {
  if (currentStage) {
    return css({
      backgroundColor: color.MAIN,
    });
  }
  return css({
    backgroundColor: color.GY[3],
  });
};
