import React, { useState } from 'react';
import { BookmarkDF, BookmarkPR, NextArrow, PrevArrow, Share } from '@/assets';
import { GameDetail, GameSet } from '@/types/game';
import { formatDateFromISO } from '@/utils/formatData';
import Chips from '@/components/atoms/Chips/Chips';
import Divider from '@/components/atoms/Divider/Divider';
import { SubTag } from '@/components/atoms/SubTag/SubTag';
import MenuTap, { MenuItem } from '@/components/atoms/MenuTap/MenuTap';
import GameStageBar from '@/components/atoms/GameStageBar/GameStageBar';
import InteractionButton from '@/components/atoms/InteractionButton/InteractionButton';
import BalanceGameBox from '@/components/molecules/BalanceGameBox/BalanceGameBox';
import { useCreateGameBookmarkMutation } from '@/hooks/api/bookmark/useCreateGameBookmarkMutation';
import { useDeleteGameBookmarkMutation } from '@/hooks/api/bookmark/useDeleteGameBookmarkMutation';
import * as S from './BalanceGameSection.style';

export interface BalanceGameSectionProps {
  gameSetId: number;
  game?: GameSet;
}

const gameDetails: GameDetail[] = Array.from({ length: 10 }, () => ({
  id: 0,
  title: '',
  description: '',
  gameOptions: [],
  votesCountOfOptionA: 0,
  votesCountOfOptionB: 0,
  myBookmark: false,
  votedOption: null,
}));

const BalanceGameSection = ({ gameSetId, game }: BalanceGameSectionProps) => {
  const [currentStage, setCurrentStage] = useState<number>(0);
  const gameStage: GameDetail[] = game?.gameDetailResponses ?? gameDetails;
  const currentGame: GameDetail = gameStage[currentStage];

  const handleNextButton = () => {
    if (!currentGame.votedOption) return;
    setCurrentStage((stage) => (stage < 9 ? stage + 1 : stage));
  };

  const handleNextStage = () => {
    setCurrentStage((stage) => stage + 1);
  };

  const { mutate: createBookmark } = useCreateGameBookmarkMutation(
    gameSetId,
    currentGame.id,
  );

  const { mutate: deleteBookmark } = useDeleteGameBookmarkMutation(
    gameSetId,
    currentGame.id,
  );

  const handleBookmarkClick = () => {
    if (!game) return;

    if (currentGame.myBookmark) {
      deleteBookmark();
    } else {
      createBookmark();
    }
  };

  const otherGameItem: MenuItem[] = [{ label: '신고' }];

  return (
    <div css={S.balanceGameStyling}>
      <div css={S.balanceGameContainer}>
        <div css={S.balanceGameWrapper}>
          <div css={S.balanceGameTitleWrapper}>
            <div css={S.balanceGameInfoWrapper}>
              <div css={S.titleWrapper}>
                <Chips variant="roundOutline">{game?.mainTag}</Chips>
                <div css={S.balanceGameTitle}>{game?.title}</div>
              </div>
              <SubTag tag={game?.subTag} />
            </div>
            <div css={S.balanceGameMenuWrapper}>
              <div css={S.textWrapper}>
                <span css={S.nicknameStyling}>{game?.member}</span>
                <span css={S.dateStyling}>
                  {formatDateFromISO(game?.createdAt ?? '')}
                </span>
              </div>
              <MenuTap menuData={otherGameItem} />
            </div>
          </div>
          <div css={S.balanceGameSubTitle}>{currentGame.description}</div>
        </div>
        <Divider orientation="width" length={1095} />
        <BalanceGameBox
          gameSetId={gameSetId}
          gameId={currentGame.id}
          options={currentGame.gameOptions}
          selectedVote={currentGame.votedOption}
          handleNextStage={handleNextStage}
        />
        <div css={S.stageBarWrapper}>
          <button
            type="button"
            css={[
              S.buttonStyling,
              S.activeButtonStyling(true),
              S.getButtonVisibility(currentStage),
            ]}
            onClick={() => {
              setCurrentStage((stage) => (stage > 0 ? stage - 1 : stage));
            }}
          >
            <PrevArrow />
            이전 질문
          </button>
          <GameStageBar stage={currentStage} />
          <button
            type="button"
            css={[
              S.buttonStyling,
              S.activeButtonStyling(currentGame.votedOption !== null),
            ]}
            onClick={handleNextButton}
          >
            다음 질문
            <NextArrow />
          </button>
        </div>
      </div>
      <div css={S.buttonWrapper}>
        <InteractionButton
          buttonLabel="다른 사람들은 어떤 선택을 할까?"
          icon={<Share />}
          iconLabel="공유하기"
          onClick={() => {}}
        />
        <InteractionButton
          buttonLabel="이 게임 제법 폼이 좋아?"
          icon={currentGame.myBookmark ? <BookmarkPR /> : <BookmarkDF />}
          iconLabel="저장하기"
          onClick={handleBookmarkClick}
        />
      </div>
    </div>
  );
};

export default BalanceGameSection;
