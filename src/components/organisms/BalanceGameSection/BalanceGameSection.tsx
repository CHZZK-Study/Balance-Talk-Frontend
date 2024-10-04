import React from 'react';
import { BookmarkDF, BookmarkPR, NextArrow, PrevArrow, Share } from '@/assets';
import { GameDetail } from '@/types/game';
import Chips from '@/components/atoms/Chips/Chips';
import Divider from '@/components/atoms/Divider/Divider';
import { SubTag } from '@/components/atoms/SubTag/SubTag';
import MenuTap, { MenuItem } from '@/components/atoms/MenuTap/MenuTap';
import GameStageBar from '@/components/atoms/GameStageBar/GameStageBar';
import InteractionButton from '@/components/atoms/InteractionButton/InteractionButton';
import BalanceGameBox from '@/components/molecules/BalanceGameBox/BalanceGameBox';
import * as S from './BalanceGameSection.style';

export interface BalanceGameSectionProps {
  game?: GameDetail;
  gameStage?: number;
}

const BalanceGameSection = ({ game, gameStage }: BalanceGameSectionProps) => {
  const otherGameItem: MenuItem[] = [{ label: '신고' }];

  return (
    <div css={S.balanceGameStyling}>
      <div css={S.balanceGameContainer}>
        <div css={S.balanceGameWrapper}>
          <div css={S.balanceGameTitleWrapper}>
            <div css={S.balanceGameInfoWrapper}>
              <div css={S.titleWrapper}>
                <Chips variant="roundOutline">커플</Chips>
                <div css={S.balanceGameTitle}>{game?.title}</div>
              </div>
              <SubTag tag="연예인" />
            </div>
            <div css={S.balanceGameMenuWrapper}>
              <div css={S.textWrapper}>
                <span css={S.nicknameStyling}>닉네임593</span>
                <span css={S.dateStyling}>2024.07.10</span>
              </div>
              <MenuTap menuData={otherGameItem} />
            </div>
          </div>
          <div css={S.balanceGameSubTitle}>{game?.description}</div>
        </div>
        <Divider orientation="width" length={1095} />
        <BalanceGameBox
          options={game?.gameOptions}
          selectedOption={game?.votedOption}
        />
        <div css={S.stageBarWrapper}>
          <button
            type="button"
            css={[
              S.buttonStyling,
              S.getButtonStyling(false),
              S.getButtonVisibility(gameStage ?? 0),
            ]}
          >
            <PrevArrow css={S.getIconStyling(false)} />
            이전 질문
          </button>
          <GameStageBar stage={gameStage ?? 0} />
          <button
            type="button"
            css={[S.buttonStyling, S.getButtonStyling(true)]}
          >
            다음 질문
            <NextArrow css={S.getIconStyling(true)} />
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
          icon={game?.myBookmark ? <BookmarkPR /> : <BookmarkDF />}
          iconLabel="저장하기"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default BalanceGameSection;
