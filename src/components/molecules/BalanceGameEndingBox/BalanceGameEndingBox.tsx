/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { BookmarkDF, GameEnding, Share } from '@/assets';
import Divider from '@/components/atoms/Divider/Divider';
import InteractionButton from '@/components/atoms/InteractionButton/InteractionButton';
import * as S from './BalanceGameEndingBox.style';

export interface BalanceGameEndingBoxProps {
  title: string;
  gameSetId: number;
}

const BalanceGameEndingBox = ({
  title,
  gameSetId,
}: BalanceGameEndingBoxProps) => {
  return (
    <div css={S.balanceGameContainer}>
      <div css={S.titleStyling}>{title}</div>
      <div css={S.imgWrapper}>
        <img src={GameEnding} alt="BalanceGame Ending" />
      </div>
      <Divider orientation="width" length={1095} />
      <div css={S.buttonWrapper}>
        <InteractionButton
          buttonLabel="다른 사람들은 어떤 선택을 할까?"
          icon={<Share />}
          iconLabel="공유하기"
          onClick={() => {}}
        />
        <InteractionButton
          buttonLabel="이 게임 제법 폼이 좋아?"
          icon={<BookmarkDF />}
          iconLabel="저장하기"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default BalanceGameEndingBox;
