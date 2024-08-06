import React from 'react';
import { Search } from '@/assets';
import Button from '@/components/atoms/Button/Button';
import {
  btnWrapperStyling,
  inputStyling,
  searchBarContainerStyling,
  searchBarStyling,
} from './SearchBar.style';

const SearchBar = () => {
  const keyWordArray: string[] = [
    '이상형 월드컵',
    '인기',
    '커플',
    '개그',
    '음식',
    '여행',
    '영화 월드컵',
  ];

  return (
    <div css={searchBarContainerStyling}>
      <div css={searchBarStyling}>
        <input css={inputStyling} placeholder="궁금한 키워드를 입력해주세요!" />
        <Button size="large" variant="circle">
          <Search />
        </Button>
      </div>
      <div css={btnWrapperStyling}>
        {keyWordArray.map((keyWord) => (
          <Button size="large" variant="outlinePrimary">
            #{keyWord}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
