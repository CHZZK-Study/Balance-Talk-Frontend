import React, { useState, useEffect } from 'react';
import { ToggleGroupItem } from '@/components/atoms/ToggleGroup/ToggleGroup';
import BestTalkPick from '@/components/molecules/BestTalkPick/BestTalkPick';
import TalkPickListSection from '@/components/organisms/TalkPickListSection/TalkPickListSection';
import { useBestTalkPickListQuery } from '@/hooks/api/talk-pick/useBestTalkPickListQuery';
import { useTalkPickListQuery } from '@/hooks/api/talk-pick/useTalkPickListQuery';
import * as S from './TalkPickPlacePage.style';

const TalkPickPlacePage = () => {
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [selectedValue, setSelectedValue] = useState<string>('trend');
  const toggleItem: ToggleGroupItem[] = [
    {
      label: '최신순',
      value: 'recent',
    },
    {
      label: '인기순',
      value: 'trend',
    },
  ];

  const { bestTalkPick } = useBestTalkPickListQuery();
  const { talkPickList } = useTalkPickListQuery({
    page: selectedPage - 1,
    size: 20,
    sort: selectedValue === 'recent' ? 'createdAt,desc' : 'views,desc',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedPage, selectedValue]);

  useEffect(() => {
    setSelectedPage(1);
  }, [selectedValue]);

  return (
    <div css={S.talkPickPlaceStyling}>
      <div css={S.bestTalkPickStyling}>
        <div css={S.bestTalkPickTextWrapper}>
          <div css={S.bestTalkPickSubTitle}>
            모두가 톡커도 되고 픽커도 되는 (두둥탁)
          </div>
          <div css={S.bestTalkPickTitle}>톡&픽 플레이스</div>
        </div>
        <BestTalkPick bestTalkPick={bestTalkPick} />
      </div>
      <TalkPickListSection
        talkPickList={talkPickList}
        toggleItem={toggleItem}
        selectedValue={selectedValue}
        setToggleValue={setSelectedValue}
        selectedPage={selectedPage}
        handlePageChange={setSelectedPage}
      />
    </div>
  );
};

export default TalkPickPlacePage;
