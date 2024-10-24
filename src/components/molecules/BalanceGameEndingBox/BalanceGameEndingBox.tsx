/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { BookmarkDF, BookmarkPR, GameEnding, Share } from '@/assets';
import Divider from '@/components/atoms/Divider/Divider';
import InteractionButton from '@/components/atoms/InteractionButton/InteractionButton';
import { useCreateDoneGameBookmarkMutation } from '@/hooks/api/bookmark/useCreateDoneGameBookmark';
import { useDeleteDoneGameBookmarkMutation } from '@/hooks/api/bookmark/useDeleteDoneGameBookmark';
import * as S from './BalanceGameEndingBox.style';

export interface BalanceGameEndingBoxProps {
  title: string;
  gameSetId: number;
  myBookmark: boolean;
}

const BalanceGameEndingBox = ({
  title,
  gameSetId,
  myBookmark,
}: BalanceGameEndingBoxProps) => {
  const { mutate: createEndBookmark } =
    useCreateDoneGameBookmarkMutation(gameSetId);

  const { mutate: deleteEndBookmark } =
    useDeleteDoneGameBookmarkMutation(gameSetId);

  const handleEndBookmarkClick = () => {
    if (myBookmark) {
      deleteEndBookmark();
    } else {
      createEndBookmark();
    }
  };

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
          icon={myBookmark ? <BookmarkPR /> : <BookmarkDF />}
          iconLabel="저장하기"
          onClick={handleEndBookmarkClick}
        />
      </div>
    </div>
  );
};

export default BalanceGameEndingBox;
