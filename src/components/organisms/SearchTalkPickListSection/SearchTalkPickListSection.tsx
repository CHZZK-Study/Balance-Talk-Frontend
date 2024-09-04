/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import ToggleGroup, {
  ToggleGroupItem,
} from '@/components/atoms/ToggleGroup/ToggleGroup';
import { SearchTalkPickItemProps } from '@/components/atoms/SearchTalkPickItem/SearchTalkPickItem';
import SearchTalkPickList, {
  SearchTalkPickListProps,
} from '@/components/molecules/SearchTalkPickList/SearchTalkPickList';
import Pagination from '@/components/atoms/Pagination/Pagination';
import { calculateTotalPages, generatePageNumbers } from '@/utils/pagination';
import * as S from './SearchTalkPickListSection.style';

const SearchTalkPickListSection = ({
  searchTalkPickList,
}: SearchTalkPickListProps) => {
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [selectedValue, setSelectedValue] = useState<string>('trend');
  const [searchTalkPickItems, setSearchTalkPickItems] = useState<
    SearchTalkPickItemProps[]
  >([]);

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

  const commentsPerPage = 10;

  const totalPages = calculateTotalPages(
    searchTalkPickList.length,
    commentsPerPage,
  );
  const pages = generatePageNumbers(totalPages);

  const displayedItems = searchTalkPickList.slice(
    (selectedPage - 1) * commentsPerPage,
    selectedPage * commentsPerPage,
  );

  const handlePageChange = (page: number) => {
    setSelectedPage(page);
  };

  return (
    <div css={S.containerStyle}>
      <div css={S.titleWrapStyle}>
        <div>톡픽</div>
        <ToggleGroup
          items={toggleItem}
          selectedValue={selectedValue}
          onClick={setSelectedValue}
        />
      </div>
      <div>
        <SearchTalkPickList searchTalkPickList={displayedItems} />
      </div>
      <div css={S.paginationWrapStyle}>
        <Pagination
          pages={pages}
          selected={selectedPage}
          maxPage={totalPages}
          onChangeNavigate={handlePageChange}
        />
      </div>
    </div>
  );
};

export default SearchTalkPickListSection;
