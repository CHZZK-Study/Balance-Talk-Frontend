import React from 'react';
import GameRecommendButton, {
  GameRecommend,
} from '@/components/atoms/GameRecommendButton/GameRecommendButton';
import { gameRecommendListStyling } from './GameRecommendList.style';

export interface GameRecommendListProps {
  gameList: GameRecommend[];
}

const GameRecommendList = ({ gameList }: GameRecommendListProps) => (
  <div css={gameRecommendListStyling}>
    {gameList.map((game) => (
      <GameRecommendButton game={game} />
    ))}
  </div>
);

export default GameRecommendList;
