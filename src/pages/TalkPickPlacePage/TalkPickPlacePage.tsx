import React from 'react';
import { TalkPickListItem, TalkPickListPagination } from '@/types/talk-pick';
import BestTalkPick from '@/components/molecules/BestTalkPick/BestTalkPick';
import TalkPickListSection from '@/components/organisms/TalkPickListSection/TalkPickListSection';
import * as S from './TalkPickPlacePage.style';

const bestTalkPickList: TalkPickListItem[] = [
  {
    id: 1,
    title: '효과적인 의사소통을 위한 비언어적 신호',
    writer: '닉네임593',
    createdAt: '2024-07-10',
    views: 2000,
    bookmarks: 3000,
  },
  {
    id: 2,
    title: '세계 최초 3D 프린팅 인간 장기 이식 성공',
    writer: '닉네임593',
    createdAt: '2024-07-10',
    views: 1254,
    bookmarks: 1127,
  },
  {
    id: 3,
    title: '역대급 인공지능 슈퍼컴퓨터 개발, 과학 기술 혁신 촉진',
    writer: '닉네임593',
    createdAt: '2024-07-10',
    views: 1030,
    bookmarks: 752,
  },
];

const exampleTalkPickList: TalkPickListItem[] = Array.from(
  { length: 30 },
  () => ({
    id: 5712,
    title: '효과적인 의사소통을 위한 비언어적 신호',
    writer: '닉네임593',
    createdAt: '2024-07-10',
    views: 2000,
    bookmarks: 3000,
  }),
);

const exampleTalkPickPagination: TalkPickListPagination = {
  totalPages: 0,
  totalElements: 0,
  size: 0,
  content: exampleTalkPickList,
  number: 0,
  sort: {
    empty: true,
    sorted: true,
    unsorted: true,
  },
  numberOfElements: 0,
  pageable: {
    offset: 0,
    sort: {
      empty: true,
      sorted: true,
      unsorted: true,
    },
    pageNumber: 0,
    pageSize: 0,
    paged: true,
    unpaged: true,
  },
  first: true,
  last: true,
  empty: true,
};

const TalkPickPlacePage = () => {
  return (
    <div css={S.talkPickPlaceStyling}>
      <div css={S.bestTalkPickStyling}>
        <div css={S.bestTalkPickTextWrapper}>
          <div css={S.bestTalkPickSubTitle}>
            모두가 톡커도 되고 픽커도 되는 (두둥탁)
          </div>
          <div css={S.bestTalkPickTitle}>톡&픽 플레이스</div>
        </div>
        <BestTalkPick bestTalkPick={bestTalkPickList} />
      </div>
      <TalkPickListSection talkPickList={exampleTalkPickPagination} />
    </div>
  );
};

export default TalkPickPlacePage;
