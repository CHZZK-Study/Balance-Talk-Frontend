import React from 'react';
import TopBanner from '@/components/molecules/TopBanner/TopBanner';
import SearchBar from '@/components/molecules/SearchBar/SearchBar';
import CategoryBox from '@/components/molecules/CategoryBox/CategoryBox';
import BalanceGameList from '@/components/organisms/BalanceGameList/BalanceGameList';
import { useTodayTalkPickQuery } from '@/hooks/api/talk-pick/useTodayTalkPickQuery';
import * as S from './LandingPage.style';

const contents = [
  {
    imgUrl: ['sample-image1.jpg'],
    id: 1,
    title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
    tagLabels: ['화제의 중심', '#인기'],
    bookmarkState: false,
    optionA: '만원 지하철 1시간 등교',
    optionB: '좌석 널널한 버스 2시간 등교',
  },
  {
    imgUrl: ['sample-image1.jpg'],
    id: 2,
    title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
    tagLabels: ['화제의 중심', '#인기'],
    bookmarkState: false,
    optionA: '만원 지하철 1시간 등교',
    optionB: '좌석 널널한 버스 2시간 등교',
  },
  {
    imgUrl: ['sample-image1.jpg'],
    id: 3,
    title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
    tagLabels: ['화제의 중심', '#인기'],
    bookmarkState: false,
    optionA: '만원 지하철 1시간 등교',
    optionB: '좌석 널널한 버스 2시간 등교',
  },
  {
    imgUrl: ['sample-image1.jpg'],
    id: 4,
    title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
    tagLabels: ['화제의 중심', '#인기'],
    bookmarkState: false,
    optionA: '만원 지하철 1시간 등교',
    optionB: '좌석 널널한 버스 2시간 등교',
  },
  {
    imgUrl: ['sample-image1.jpg'],
    id: 5,
    title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
    tagLabels: ['화제의 중심', '#인기'],
    bookmarkState: false,
    optionA: '만원 지하철 1시간 등교',
    optionB: '좌석 널널한 버스 2시간 등교',
  },
  {
    imgUrl: ['sample-image1.jpg'],
    id: 6,
    title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
    tagLabels: ['화제의 중심', '#인기'],
    bookmarkState: false,
    optionA: '만원 지하철 1시간 등교',
    optionB: '좌석 널널한 버스 2시간 등교',
  },
  {
    imgUrl: ['sample-image1.jpg'],
    id: 7,
    title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
    tagLabels: ['화제의 중심', '#인기'],
    bookmarkState: false,
    optionA: '만원 지하철 1시간 등교',
    optionB: '좌석 널널한 버스 2시간 등교',
  },
  {
    imgUrl: ['sample-image1.jpg'],
    id: 8,
    title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
    tagLabels: ['화제의 중심', '#인기'],
    bookmarkState: false,
    optionA: '만원 지하철 1시간 등교',
    optionB: '좌석 널널한 버스 2시간 등교',
  },
  {
    imgUrl: ['sample-image1.jpg'],
    id: 9,
    title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
    tagLabels: ['화제의 중심', '#인기'],
    bookmarkState: false,
    optionA: '만원 지하철 1시간 등교',
    optionB: '좌석 널널한 버스 2시간 등교',
  },
  {
    imgUrl: ['sample-image1.jpg'],
    id: 10,
    title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
    tagLabels: ['화제의 중심', '#인기'],
    bookmarkState: false,
    optionA: '만원 지하철 1시간 등교',
    optionB: '좌석 널널한 버스 2시간 등교',
  },
  {
    imgUrl: ['sample-image1.jpg'],
    id: 11,
    title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
    tagLabels: ['화제의 중심', '#인기'],
    bookmarkState: false,
    optionA: '만원 지하철 1시간 등교',
    optionB: '좌석 널널한 버스 2시간 등교',
  },
  {
    imgUrl: ['sample-image1.jpg'],
    id: 12,
    title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
    tagLabels: ['화제의 중심', '#인기'],
    bookmarkState: false,
    optionA: '만원 지하철 1시간 등교',
    optionB: '좌석 널널한 버스 2시간 등교',
  },
  {
    imgUrl: ['sample-image1.jpg'],
    id: 13,
    title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
    tagLabels: ['화제의 중심', '#인기'],
    bookmarkState: false,
    optionA: '만원 지하철 1시간 등교',
    optionB: '좌석 널널한 버스 2시간 등교',
  },
  {
    imgUrl: ['sample-image1.jpg'],
    id: 14,
    title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
    tagLabels: ['화제의 중심', '#인기'],
    bookmarkState: false,
    optionA: '만원 지하철 1시간 등교',
    optionB: '좌석 널널한 버스 2시간 등교',
  },
  {
    imgUrl: ['sample-image1.jpg'],
    id: 15,
    title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
    tagLabels: ['화제의 중심', '#인기'],
    bookmarkState: false,
    optionA: '만원 지하철 1시간 등교',
    optionB: '좌석 널널한 버스 2시간 등교',
  },
  {
    imgUrl: ['sample-image1.jpg'],
    id: 16,
    title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
    tagLabels: ['화제의 중심', '#인기'],
    bookmarkState: false,
    optionA: '만원 지하철 1시간 등교',
    optionB: '좌석 널널한 버스 2시간 등교',
  },
];

const LandingPage = () => {
  const { todayTalkPick } = useTodayTalkPickQuery();

  return (
    <div>
      <TopBanner todayTalkPick={todayTalkPick} />
      <div css={S.contentWrapStyle}>
        <SearchBar />
        <div css={S.categoryBoxStyle}>
          <CategoryBox />
        </div>
        <BalanceGameList contents={contents} />
      </div>
    </div>
  );
};

export default LandingPage;
