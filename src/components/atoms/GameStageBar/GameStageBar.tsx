import React from 'react';
import * as S from './GameStageBar.style';

export interface GameStageBarProps {
  stage: number;
}

const GameStageBar = ({ stage }: GameStageBarProps) => {
  const totalStage: number = 10;

  return (
    <div css={S.stageBarContainer}>
      {Array.from({ length: totalStage }).map((_, idx) => (
        <div css={[S.stageBarStyling, S.getStageBarColor(idx <= stage)]} />
      ))}
    </div>
  );
};

export default GameStageBar;
