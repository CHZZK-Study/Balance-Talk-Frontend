/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import ToggleGroup, {
  ToggleGroupItem,
} from '@/components/atoms/ToggleGroup/ToggleGroup';
import { SearchTalkPickItemProps } from '@/components/atoms/SearchTalkPickItem/SearchTalkPickItem';
import SearchTalkPickList from '@/components/molecules/SearchTalkPickList/SearchTalkPickList';
import Pagination from '@/components/atoms/Pagination/Pagination';
import { SampleWhole } from '@/assets';
import * as S from './SearchTalkPickListSection.style';

const generatePageNumbers = (totalPages: number) =>
  Array.from({ length: totalPages }, (_, i) => i + 1);
const calculateTotalPages = (totalItems: number, itemsPerPage: number) =>
  Math.ceil(totalItems / itemsPerPage);

const SearchTalkPickListSection = () => {
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

  const SearchTalkPickItems: SearchTalkPickItemProps[] = Array.from(
    { length: 30 },
    (_, index) => ({
      title: '월클 정국 VS 존잘 차은우',
      date: '2024.08.26',
      content:
        '우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하',
      imgUrl: SampleWhole,
    }),
  );

  const commentsPerPage = 10;

  const totalPages = calculateTotalPages(
    SearchTalkPickItems.length,
    commentsPerPage,
  );
  const pages = generatePageNumbers(totalPages);

  const displayedItems = SearchTalkPickItems.slice(
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
        <SearchTalkPickList searchTalkPickItems={displayedItems} />
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
