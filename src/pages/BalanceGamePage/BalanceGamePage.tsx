import React from 'react';
import { useParams } from 'react-router-dom';
import { useGameBySetId } from '@/hooks/api/game/useGameBySetIdQuery';
import Divider from '@/components/atoms/Divider/Divider';
import BalanceGameSection from '@/components/organisms/BalanceGameSection/BalanceGameSection';
import * as S from './BalanceGamePage.style';

const BalanceGamePage = () => {
  const { setId } = useParams<{ setId: string }>();
  const gameSetId = Number(setId);

  const { gameSet } = useGameBySetId(gameSetId);

  return (
    <div css={S.pageStyle}>
      <div css={S.textContainer}>
        <div css={S.titleTextWrapper}>
          <div css={S.subTitleStyling}>
            반드시 둘 중 하나는 골라야 한다면, 그대의 선택은?
          </div>
          <div css={S.titleStyling}>지금은 밸런스게임 타임</div>
        </div>
        <Divider length={1175} orientation="width" />
      </div>
      <BalanceGameSection game={gameSet?.gameDetailResponses} />
    </div>
  );
};

export default BalanceGamePage;
