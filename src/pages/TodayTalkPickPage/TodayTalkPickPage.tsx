import React from 'react';
import { useNewSelector } from '@/store';
import { selectAccessToken } from '@/store/auth';
import { useLocation } from 'react-router-dom';
import { useParseJwt } from '@/hooks/common/useParseJwt';
import { useMemberQuery } from '@/hooks/api/member/useMemberQuery';
import TodayTalkPickSection from '@/components/organisms/TodayTalkPickSection/TodayTalkPickSection';
import CommentsSection from '@/components/organisms/CommentsSection/CommentsSection';
import { useTalkPickDetailQuery } from '@/hooks/api/talk-pick/useTalkPickDetailQuery';
import * as S from './TodayTalkPickPage.style';

interface State {
  talkPickId: number;
}

const commentsData = [
  {
    id: '1',
    imgUrl: 'url1',
    nickname: '닉네임1',
    createdTime: '24.07.04 14:56',
    comment: '댓글 내용1',
    likeCount: 35,
    stance: 'pros' as 'pros' | 'cons',
  },
  {
    id: '2',
    imgUrl: 'url2',
    nickname: '닉네임2',
    createdTime: '24.07.04 14:57',
    comment: '댓글 내용2',
    likeCount: 10,
    stance: 'cons' as 'pros' | 'cons',
  },
  {
    id: '3',
    imgUrl: 'url3',
    nickname: '닉네임3',
    createdTime: '24.07.04 14:58',
    comment: '댓글 내용3',
    likeCount: 22,
    stance: 'pros' as 'pros' | 'cons',
  },
  {
    id: '4',
    imgUrl: 'url4',
    nickname: '닉네임4',
    createdTime: '24.07.04 14:59',
    comment: '댓글 내용4',
    likeCount: 50,
    stance: 'cons' as 'pros' | 'cons',
  },
  {
    id: '5',
    imgUrl: 'url5',
    nickname: '닉네임5',
    createdTime: '24.07.04 15:00',
    comment: '댓글 내용5',
    likeCount: 5,
    stance: 'pros' as 'pros' | 'cons',
  },
  {
    id: '6',
    imgUrl: 'url6',
    nickname: '닉네임6',
    createdTime: '24.07.04 15:01',
    comment: '댓글 내용6',
    likeCount: 15,
    stance: 'cons' as 'pros' | 'cons',
  },
  {
    id: '7',
    imgUrl: 'url7',
    nickname: '닉네임7',
    createdTime: '24.07.04 15:02',
    comment: '댓글 내용7',
    likeCount: 30,
    stance: 'pros' as 'pros' | 'cons',
  },
  {
    id: '8',
    imgUrl: 'url8',
    nickname: '닉네임8',
    createdTime: '24.07.04 15:03',
    comment: '댓글 내용8',
    likeCount: 25,
    stance: 'cons' as 'pros' | 'cons',
  },
];

const TodayTalkPickPage = () => {
  const accessToken = useNewSelector(selectAccessToken);
  const { member } = useMemberQuery(useParseJwt(accessToken).memberId);

  const location = useLocation();
  const state = location.state as State;
  const talkPickId = state?.talkPickId;

  const { talkPick } = useTalkPickDetailQuery(talkPickId);

  return (
    <div css={S.contentWrapStyle}>
      <TodayTalkPickSection
        todayTalkPick={talkPick}
        myTalkPick={member?.nickname === talkPick?.writer}
      />
      <div css={S.commentsWrapStyle}>
        <CommentsSection commentsData={commentsData} voted />
      </div>
    </div>
  );
};

export default TodayTalkPickPage;
