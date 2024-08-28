import React, { useState } from 'react';
import {
  AngleSmallUp,
  AngleSmallDown,
  BookmarkRR,
  BookmarkSR,
  Share,
} from '@/assets';
import { TalkPickDetail } from '@/types/talk-pick';
import { formatDate, formatNumber } from '@/utils/formatData';
import Button from '@/components/atoms/Button/Button';
import SummaryBox from '@/components/molecules/SummaryBox/SummaryBox';
import VotePrototype from '@/components/molecules/VotePrototype/VotePrototype';
import MenuTap, { MenuItem } from '@/components/atoms/MenuTap/MenuTap';
import { useCreateTalkPickBookmarkMutation } from '@/hooks/api/bookmark/useCreateTalkPickBookmarkMutation';
import { useDeleteTalkPickBookmarkMutation } from '@/hooks/api/bookmark/useDeleteTalkPickBookmarkMutation';
import * as S from './TodayTalkPickSection.style';

export interface TodayTalkPickProps {
  todayTalkPick?: TalkPickDetail;
  talkPickMenu: MenuItem[];
}

const TodayTalkPickSection = ({
  todayTalkPick,
  talkPickMenu,
}: TodayTalkPickProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { mutate: createBookmark } = useCreateTalkPickBookmarkMutation(
    todayTalkPick?.id ?? 0,
  );

  const { mutate: deleteBookmark } = useDeleteTalkPickBookmarkMutation(
    todayTalkPick?.id ?? 0,
  );

  const handleBookmarkClick = () => {
    if (!todayTalkPick) return;

    if (todayTalkPick.myBookmark) {
      deleteBookmark();
    } else {
      createBookmark();
    }
  };

  const handleContentToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div css={S.todayTalkPickStyling}>
      <div css={S.talkPickTitle}>오늘의 톡픽</div>
      <div css={S.talkPickWrapper}>
        <div css={S.talkPickTopStyling}>
          <div css={S.talkPickDetailWrapper}>
            <div css={S.talkPickTitle}>{todayTalkPick?.title}</div>
            <MenuTap menuData={talkPickMenu} />
          </div>
          <div css={S.talkPickDetailWrapper}>
            <div>
              <span css={S.talkPickDetail}>{todayTalkPick?.writer}</span>
              <span css={S.talkPickDate}>
                {formatDate(todayTalkPick?.createdAt ?? '')}
              </span>
              {todayTalkPick?.isUpdated && (
                <span css={S.talkPickDetail}>(수정됨)</span>
              )}
            </div>
            <div css={S.talkPickDetail}>
              조회
              <span css={S.talkPickView}>
                {formatNumber(todayTalkPick?.views ?? 0)}
              </span>
            </div>
          </div>
        </div>
        <div css={S.talkPickContentWrapper}>
          <SummaryBox summary={todayTalkPick?.summary} />
          {isExpanded && (
            <div css={S.talkPickContent}>{todayTalkPick?.content}</div>
          )}
          <Button
            variant="outlineShadow"
            size="large"
            iconRight={isExpanded ? <AngleSmallUp /> : <AngleSmallDown />}
            css={S.contentBtnStyling}
            onClick={handleContentToggle}
          >
            {isExpanded ? '요약하기' : '전체 글 보기'}
          </Button>
        </div>
        <div css={S.voteBarWrapper}>
          <VotePrototype
            talkPickId={todayTalkPick?.id ?? 3}
            leftButtonText={todayTalkPick?.optionA ?? ''}
            rightButtonText={todayTalkPick?.optionB ?? ''}
            leftVotes={todayTalkPick?.votesCountOfOptionA ?? 0}
            rightVotes={todayTalkPick?.votesCountOfOptionB ?? 0}
            selectedVote={todayTalkPick?.votedOption ?? null}
          />
        </div>
      </div>
      <div css={S.talkPickBtnWrapper}>
        <Button
          variant="outlineShadow"
          size="medium"
          iconLeft={todayTalkPick?.myBookmark ? <BookmarkSR /> : <BookmarkRR />}
          onClick={handleBookmarkClick}
        >
          {todayTalkPick?.bookmarks}
        </Button>
        <Button
          variant="outlineShadow"
          size="medium"
          iconLeft={<Share />}
          css={S.shareBtnStyling}
        >
          공유하기
        </Button>
      </div>
    </div>
  );
};

export default TodayTalkPickSection;
