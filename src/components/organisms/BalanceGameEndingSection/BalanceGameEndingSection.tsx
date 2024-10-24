import React from 'react';
import BalanceGameEndingBox from '@/components/molecules/BalanceGameEndingBox/BalanceGameEndingBox';
import * as S from './BalanceGameEndingSection.style';

export interface BalanceGameEndingSectionProps {
  title: string;
  gameSetId: number;
  myBookmark: boolean;
}

const BalanceGameEndingSection = ({
  title,
  gameSetId,
  myBookmark,
}: BalanceGameEndingSectionProps) => {
  return (
    <div css={S.balanceGameEndingStyling}>
      <BalanceGameEndingBox
        title={title}
        gameSetId={gameSetId}
        myBookmark={myBookmark}
      />

      {/* TODO: 더 많은 밸런스게임 보러가기 */}
    </div>
  );
};

export default BalanceGameEndingSection;
