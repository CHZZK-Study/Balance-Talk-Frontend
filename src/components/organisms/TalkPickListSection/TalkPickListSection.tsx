import React from 'react';
import { TalkPickBubble } from '@/assets';
import { createRangeArray } from '@/utils/array';
import { TalkPickListPagination } from '@/types/talk-pick';
import ToggleGroup, {
  ToggleGroupItem,
} from '@/components/atoms/ToggleGroup/ToggleGroup';
import Button from '@/components/atoms/Button/Button';
import Pagination from '@/components/atoms/Pagination/Pagination';
import TalkPickList from '@/components/molecules/TalkPickList/TalkPickList';
import * as S from './TalkPickListSection.style';

export interface TalkPickListProps {
  talkPickList?: TalkPickListPagination;
  toggleItem: ToggleGroupItem[];
  selectedValue: string;
  setToggleValue: React.Dispatch<React.SetStateAction<string>>;
  selectedPage: number;
  handlePageChange: React.Dispatch<React.SetStateAction<number>>;
}

const TalkPickListSection = ({
  talkPickList,
  toggleItem,
  selectedValue,
  setToggleValue,
  selectedPage,
  handlePageChange,
}: TalkPickListProps) => {
  const pages = createRangeArray(talkPickList?.totalPages || 0);

  return (
    <div css={S.talkPickListContainer}>
      <div css={S.talkPickBtnWrapper}>
        <ToggleGroup
          items={toggleItem}
          selectedValue={selectedValue}
          onClick={setToggleValue}
        />
        <div css={S.talkPickWriteBtnWrapper}>
          <TalkPickBubble />
          <Button variant="primary" size="large" css={S.talkPickWriteBtn}>
            작성하기
          </Button>
        </div>
      </div>
      <div css={S.talkPickListWrapper}>
        <TalkPickList talkPickList={talkPickList?.content} />
      </div>
      <Pagination
        pages={pages}
        selected={selectedPage}
        maxPage={talkPickList?.totalPages ?? 0}
        onChangeNavigate={handlePageChange}
      />
    </div>
  );
};

export default TalkPickListSection;
