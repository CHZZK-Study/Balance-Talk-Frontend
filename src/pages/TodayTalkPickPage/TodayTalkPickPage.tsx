import React, { useEffect, useState } from 'react';
import { useNewSelector } from '@/store';
import { selectAccessToken } from '@/store/auth';
import { useLocation } from 'react-router-dom';
import { useParseJwt } from '@/hooks/common/useParseJwt';
import { useMemberQuery } from '@/hooks/api/member/useMemberQuery';
import { useCommentsQuery } from '@/hooks/api/comment/useCommentsQuery';
import TodayTalkPickSection from '@/components/organisms/TodayTalkPickSection/TodayTalkPickSection';
import CommentsSection from '@/components/organisms/CommentsSection/CommentsSection';
import { useTalkPickSummaryMutation } from '@/hooks/api/talk-pick/useTalkPickSummaryMutation';
import { useTalkPickDetailQuery } from '@/hooks/api/talk-pick/useTalkPickDetailQuery';
import * as S from './TodayTalkPickPage.style';

interface State {
  talkPickId: number;
}

const TodayTalkPickPage = () => {
  const [selectedPage, setSelectedPage] = useState<number>(1);

  const accessToken = useNewSelector(selectAccessToken);
  const { member } = useMemberQuery(useParseJwt(accessToken).memberId);

  const location = useLocation();
  const state = location.state as State;
  const talkPickId = state?.talkPickId;

  const { mutate: getTalkPickSummary } = useTalkPickSummaryMutation(talkPickId);

  useEffect(() => {
    getTalkPickSummary();
  }, [getTalkPickSummary]);

  const { talkPick } = useTalkPickDetailQuery(talkPickId);

  const { comments } = useCommentsQuery(
    talkPickId,
    {
      page: selectedPage - 1,
      size: 2,
    },
    'comments',
  );

  return (
    <div css={S.contentWrapStyle}>
      <TodayTalkPickSection
        todayTalkPick={talkPick}
        myTalkPick={member?.nickname === talkPick?.writer}
      />
      <div css={S.commentsWrapStyle}>
        <CommentsSection
          commentList={comments}
          selectedPage={selectedPage}
          handlePageChange={setSelectedPage}
          voted
        />
      </div>
    </div>
  );
};

export default TodayTalkPickPage;
