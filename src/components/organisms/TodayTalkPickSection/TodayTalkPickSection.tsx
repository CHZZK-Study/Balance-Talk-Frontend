/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-console */
import React, { useState } from 'react';
import {
  AngleSmallUp,
  AngleSmallDown,
  BookmarkRR,
  BookmarkSR,
  Share,
} from '@/assets';
import { useNavigate } from 'react-router-dom';
import { TalkPickDetail } from '@/types/talk-pick';
import { formatDate, formatNumber } from '@/utils/formatData';
import Button from '@/components/atoms/Button/Button';
import SummaryBox from '@/components/molecules/SummaryBox/SummaryBox';
import VotePrototype from '@/components/molecules/VotePrototype/VotePrototype';
import MenuTap, { MenuItem } from '@/components/atoms/MenuTap/MenuTap';
import TextModal from '@/components/molecules/TextModal/TextModal';
import { useCreateTalkPickBookmarkMutation } from '@/hooks/api/bookmark/useCreateTalkPickBookmarkMutation';
import { useDeleteTalkPickBookmarkMutation } from '@/hooks/api/bookmark/useDeleteTalkPickBookmarkMutation';
import { useDeleteTalkPickMutation } from '@/hooks/api/talk-pick/useDeleteTalkPickMutation';
import * as S from './TodayTalkPickSection.style';

export interface TodayTalkPickProps {
  todayTalkPick?: TalkPickDetail;
  myTalkPick: boolean;
}

const TodayTalkPickSection = ({
  todayTalkPick,
  myTalkPick,
}: TodayTalkPickProps) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const [deleteTextModalOpen, setDeleteTextModalOpen] =
    useState<boolean>(false);

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

  const myTalkPickItem: MenuItem[] = [
    {
      label: '수정',
      onClick: () => {
        navigate('/post/create', { state: { todayTalkPick } });
      },
    },
    { label: '삭제', onClick: () => setDeleteTextModalOpen(true) },
  ];
  const otherTalkPickItem: MenuItem[] = [{ label: '신고' }];

  const { mutate: deleteTalkPick } = useDeleteTalkPickMutation(
    todayTalkPick?.id ?? 0,
  );

  return (
    <div css={S.todayTalkPickStyling}>
      <div css={S.centerStyling}>
        <TextModal
          text="해당 게시글을 삭제하시겠습니까?"
          isOpen={deleteTextModalOpen}
          onConfirm={() => deleteTalkPick()}
          onClose={() => setDeleteTextModalOpen(false)}
        />
      </div>
      <div css={S.talkPickTitle}>오늘의 톡픽</div>
      <div css={S.talkPickWrapper}>
        <div css={S.talkPickTopStyling}>
          <div css={S.talkPickDetailWrapper}>
            <div css={S.talkPickTitle}>{todayTalkPick?.title}</div>
            <MenuTap
              menuData={myTalkPick ? myTalkPickItem : otherTalkPickItem}
            />
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
            <div css={S.talkPickContent}>
              <p>{todayTalkPick?.content}</p>
              {todayTalkPick?.imgUrls.length !== 0 && (
                <div css={S.talkPickImageWrapper}>
                  {todayTalkPick?.imgUrls.map((url, idx) => (
                    <img src={url} alt={`image ${idx + 1}`} />
                  ))}
                </div>
              )}
            </div>
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
