import React, { useEffect, useState } from 'react';
import { TalkPickBubble } from '@/assets';
import { createRangeArray } from '@/utils/array';
import { calculateTotalPages } from '@/utils/pagination';
import { TalkPickListItem, TalkPickListPagination } from '@/types/talk-pick';
import ToggleGroup, {
  ToggleGroupItem,
  ToggleGroupProps,
} from '@/components/atoms/ToggleGroup/ToggleGroup';
import Button from '@/components/atoms/Button/Button';
import Pagination from '@/components/atoms/Pagination/Pagination';
import TalkPickList from '@/components/molecules/TalkPickList/TalkPickList';
import * as S from './TalkPickListSection.style';

export interface TalkPickListProps {
  talkPickList: TalkPickListPagination;
}

const TalkPickListSection = ({ talkPickList }: TalkPickListProps) => {
  const [selectedValue, setSelectedValue] =
    useState<ToggleGroupProps['selectedValue']>('trend');
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

  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [displayedTalkPick, setDisplayedTalkPick] = useState<
    TalkPickListItem[]
  >([]);
  const talkPickListSize: number = 20;

  useEffect(() => {
    const startList = (selectedPage - 1) * talkPickListSize;
    const nextDisplayedList = talkPickList.content.slice(
      startList,
      startList + talkPickListSize,
    );
    setDisplayedTalkPick(nextDisplayedList);
  }, [selectedPage, talkPickList.content]);

  const totalPages = calculateTotalPages(
    talkPickList.content.length,
    talkPickListSize,
  );
  const pages = createRangeArray(selectedPage, totalPages);
  const handleChangeNavigate = (page: number) => {
    setSelectedPage(page);
  };

  return (
    <div css={S.talkPickListContainer}>
      <div css={S.talkPickBtnWrapper}>
        <ToggleGroup
          items={toggleItem}
          selectedValue={selectedValue}
          onClick={setSelectedValue}
        />
        <div css={S.talkPickWriteBtnWrapper}>
          <TalkPickBubble />
          <Button variant="primary" size="large" css={S.talkPickWriteBtn}>
            작성하기
          </Button>
        </div>
      </div>
      <div css={S.talkPickListWrapper}>
        <TalkPickList talkPickList={displayedTalkPick} />
      </div>
      {totalPages > 1 && (
        <Pagination
          pages={pages}
          selected={selectedPage}
          maxPage={totalPages}
          onChangeNavigate={handleChangeNavigate}
        />
      )}
    </div>
  );
};

export default TalkPickListSection;
