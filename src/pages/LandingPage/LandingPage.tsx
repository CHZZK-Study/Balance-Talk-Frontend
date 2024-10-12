import React, { useState } from 'react';
import TopBanner from '@/components/molecules/TopBanner/TopBanner';
import SearchTagBar from '@/components/molecules/SearchTagBar/SearchTagBar';
import CategoryBox from '@/components/molecules/CategoryBox/CategoryBox';
import BalanceGameList from '@/components/organisms/BalanceGameList/BalanceGameList';
import { SampleFirst, SampleSecond } from '@/assets';
import { useTodayTalkPickQuery } from '@/hooks/api/talk-pick/useTodayTalkPickQuery';
import ToastModal from '@/components/atoms/ToastModal/ToastModal';
import * as S from './LandingPage.style';

const LandingPage = () => {
  const contents = [
    {
      id: 1,
      title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
      optionAImg: SampleFirst,
      optionBImg: SampleSecond,
      tagLabels: ['화제의 중심', '#인기'],
      bookmarkState: false,
      optionA: '만원 지하철 1시간 등교',
      optionB: '좌석 널널한 버스 2시간 등교',
    },
    {
      id: 2,
      title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
      optionAImg: SampleFirst,
      optionBImg: SampleSecond,
      tagLabels: ['화제의 중심', '#인기'],
      bookmarkState: false,
      optionA: '만원 지하철 1시간 등교',
      optionB: '좌석 널널한 버스 2시간 등교',
    },
    {
      id: 3,
      title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
      optionAImg: SampleFirst,
      optionBImg: SampleSecond,
      tagLabels: ['화제의 중심', '#인기'],
      bookmarkState: false,
      optionA: '만원 지하철 1시간 등교',
      optionB: '좌석 널널한 버스 2시간 등교',
    },
    {
      id: 4,
      title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
      optionAImg: SampleFirst,
      optionBImg: SampleSecond,
      tagLabels: ['화제의 중심', '#인기'],
      bookmarkState: false,
      optionA: '만원 지하철 1시간 등교',
      optionB: '좌석 널널한 버스 2시간 등교',
    },
    {
      id: 5,
      title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
      optionAImg: SampleFirst,
      optionBImg: SampleSecond,
      tagLabels: ['화제의 중심', '#인기'],
      bookmarkState: false,
      optionA: '만원 지하철 1시간 등교',
      optionB: '좌석 널널한 버스 2시간 등교',
    },
    {
      id: 6,
      title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
      optionAImg: SampleFirst,
      optionBImg: SampleSecond,
      tagLabels: ['화제의 중심', '#인기'],
      bookmarkState: false,
      optionA: '만원 지하철 1시간 등교',
      optionB: '좌석 널널한 버스 2시간 등교',
    },
    {
      id: 7,
      title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
      optionAImg: SampleFirst,
      optionBImg: SampleSecond,
      tagLabels: ['화제의 중심', '#인기'],
      bookmarkState: false,
      optionA: '만원 지하철 1시간 등교',
      optionB: '좌석 널널한 버스 2시간 등교',
    },
    {
      id: 8,
      title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
      optionAImg: SampleFirst,
      optionBImg: SampleSecond,
      tagLabels: ['화제의 중심', '#인기'],
      bookmarkState: false,
      optionA: '만원 지하철 1시간 등교',
      optionB: '좌석 널널한 버스 2시간 등교',
    },
    {
      id: 9,
      title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
      optionAImg: SampleFirst,
      optionBImg: SampleSecond,
      tagLabels: ['화제의 중심', '#인기'],
      bookmarkState: false,
      optionA: '만원 지하철 1시간 등교',
      optionB: '좌석 널널한 버스 2시간 등교',
    },
    {
      id: 10,
      title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
      optionAImg: SampleFirst,
      optionBImg: SampleSecond,
      tagLabels: ['화제의 중심', '#인기'],
      bookmarkState: false,
      optionA: '만원 지하철 1시간 등교',
      optionB: '좌석 널널한 버스 2시간 등교',
    },
    {
      id: 11,
      title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
      optionAImg: SampleFirst,
      optionBImg: SampleSecond,
      tagLabels: ['화제의 중심', '#인기'],
      bookmarkState: false,
      optionA: '만원 지하철 1시간 등교',
      optionB: '좌석 널널한 버스 2시간 등교',
    },
    {
      id: 12,
      title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
      optionAImg: SampleFirst,
      optionBImg: SampleSecond,
      tagLabels: ['화제의 중심', '#인기'],
      bookmarkState: false,
      optionA: '만원 지하철 1시간 등교',
      optionB: '좌석 널널한 버스 2시간 등교',
    },
    {
      id: 13,
      title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
      optionAImg: SampleFirst,
      optionBImg: SampleSecond,
      tagLabels: ['화제의 중심', '#인기'],
      bookmarkState: false,
      optionA: '만원 지하철 1시간 등교',
      optionB: '좌석 널널한 버스 2시간 등교',
    },
    {
      id: 14,
      title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
      optionAImg: SampleFirst,
      optionBImg: SampleSecond,
      tagLabels: ['화제의 중심', '#인기'],
      bookmarkState: false,
      optionA: '만원 지하철 1시간 등교',
      optionB: '좌석 널널한 버스 2시간 등교',
    },
    {
      id: 15,
      title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
      optionAImg: SampleFirst,
      optionBImg: SampleSecond,
      tagLabels: ['화제의 중심', '#인기'],
      bookmarkState: false,
      optionA: '만원 지하철 1시간 등교',
      optionB: '좌석 널널한 버스 2시간 등교',
    },
    {
      id: 16,
      title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
      optionAImg: SampleFirst,
      optionBImg: SampleSecond,
      tagLabels: ['화제의 중심', '#인기'],
      bookmarkState: false,
      optionA: '만원 지하철 1시간 등교',
      optionB: '좌석 널널한 버스 2시간 등교',
    },
  ];
  const { todayTalkPick } = useTodayTalkPickQuery();
  const [isServicePreparing, setIsServicePreparing] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleService = () => {
    setIsServicePreparing(true);
    scrollToTop();

    setTimeout(() => {
      setIsServicePreparing(false);
    }, 2000);
  };

  return (
    <div>
      {isServicePreparing && (
        <div css={S.toastModalStyling}>
          <ToastModal bgColor="white">아직 준비 중인 서비스입니다!</ToastModal>
        </div>
      )}
      <TopBanner todayTalkPick={todayTalkPick} />
      <div css={S.contentWrapStyle}>
        <SearchTagBar />
        <div css={S.categoryBoxStyle}>
          <CategoryBox handleService={handleService} />
        </div>
        <BalanceGameList contents={contents} />
      </div>
    </div>
  );
};

export default LandingPage;
