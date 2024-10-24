/* eslint-disable no-console */
import React, { useEffect, useRef, useState } from 'react';
import { BookmarkDF, BookmarkPR, NextArrow, PrevArrow, Share } from '@/assets';
import { GameDetail, GameSet } from '@/types/game';
import { formatDateFromISO } from '@/utils/formatData';
import Chips from '@/components/atoms/Chips/Chips';
import Divider from '@/components/atoms/Divider/Divider';
import { SubTag } from '@/components/atoms/SubTag/SubTag';
import MenuTap, { MenuItem } from '@/components/atoms/MenuTap/MenuTap';
import GameStageBar from '@/components/atoms/GameStageBar/GameStageBar';
import InteractionButton from '@/components/atoms/InteractionButton/InteractionButton';
import ToastModal from '@/components/atoms/ToastModal/ToastModal';
import ShareModal from '@/components/molecules/ShareModal/ShareModal';
import BalanceGameBox from '@/components/molecules/BalanceGameBox/BalanceGameBox';
import { useCreateGameBookmarkMutation } from '@/hooks/api/bookmark/useCreateGameBookmarkMutation';
import { useDeleteGameBookmarkMutation } from '@/hooks/api/bookmark/useDeleteGameBookmarkMutation';
import * as S from './BalanceGameSection.style';

export interface BalanceGameSectionProps {
  gameSetId: number;
  game?: GameSet;
  myGame?: boolean;
  currentStage: number;
  setCurrentStage: React.Dispatch<React.SetStateAction<number>>;
  handleNextGame: () => void;
  handlePrevGame: () => void;
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

const BalanceGameSection = ({
  gameSetId,
  game,
  myGame,
  currentStage,
  setCurrentStage,
  handleNextGame,
  handlePrevGame,
}: BalanceGameSectionProps) => {
  const initialRender = useRef(true);
  const currentURL: string = window.location.href;

  const gameStages: GameDetail[] = game?.gameDetailResponses ?? gameDetails;
  const currentGame: GameDetail = gameStages[currentStage];

  const [linkCopied, setLinkCopied] = useState<boolean>(false);
  const [shareModalOpen, setShareModalOpen] = useState<boolean>(false);

  const copyGameLink = (link: string) => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        console.log('게임 링크 복사 완료!');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCopyButton = (link: string) => {
    copyGameLink(link);
    setShareModalOpen(false);
    setLinkCopied(true);

    setTimeout(() => {
      setLinkCopied(false);
    }, 2000);
  };

  useEffect(() => {
    if (game && initialRender.current) {
      const bookmarkedIndex = gameStages.findIndex(
        (gameDetail) => gameDetail.myBookmark,
      );

      if (bookmarkedIndex !== -1) {
        setCurrentStage(bookmarkedIndex);
      }
      initialRender.current = false;
    }
  }, [game, gameStages, setCurrentStage]);

  const handleNextButton = () => {
    if (!currentGame.votedOption) return;
    handleNextGame();
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

  const myGameItem: MenuItem[] = [{ label: '수정' }, { label: '삭제' }];
  const otherGameItem: MenuItem[] = [{ label: '신고' }];

  return (
    <div css={S.balanceGameStyling}>
      {linkCopied && (
        <div css={S.toastModalStyling}>
          <ToastModal>복사 완료!</ToastModal>
        </div>
      )}
      <div css={S.centerStyling}>
        <ShareModal
          link={currentURL}
          isOpen={shareModalOpen}
          onConfirm={() => handleCopyButton(currentURL)}
          onClose={() => setShareModalOpen(false)}
        />
      </div>
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
                  {game ? formatDateFromISO(game.createdAt) : ''}
                </span>
              </div>
              <MenuTap menuData={myGame ? myGameItem : otherGameItem} />
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
            onClick={handlePrevGame}
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
          onClick={() => setShareModalOpen(true)}
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
