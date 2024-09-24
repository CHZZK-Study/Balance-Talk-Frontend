import React from 'react';
import * as S from './GameRecommendButton.style';

export type GameRecommend = {
  title: string;
  optionAImg: string;
  optionBImg: string;
};

export interface GameRecommendButtonProps {
  game: GameRecommend;
}

const GameRecommendButton = ({ game }: GameRecommendButtonProps) => (
  <div css={S.gameRecommendStyling}>
    <div css={S.gameImgContainer}>
      <div css={S.gameImgWrapper}>
        <img src={game.optionAImg} alt="A Img" css={S.gameImgStyling} />
      </div>
      <div css={S.gameImgWrapper}>
        <img src={game.optionBImg} alt="B Img" css={S.gameImgStyling} />
      </div>
    </div>
    <div css={S.gameTitleStyling}>{game.title}</div>
  </div>
);

export default GameRecommendButton;
