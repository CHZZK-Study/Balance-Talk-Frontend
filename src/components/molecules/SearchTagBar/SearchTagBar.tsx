import React from 'react';
import Button from '@/components/atoms/Button/Button';
import SearchBar from '@/components/atoms/SearchBar/SearchBar';
import * as S from './SearchTagBar.style';

const SearchTagBar = () => {
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
    <div css={S.searchBarContainerStyling}>
      <SearchBar />
      <div css={S.btnWrapperStyling}>
        {keyWordArray.map((keyWord) => (
          <Button key={keyWord} size="large" variant="outlinePrimary">
            #{keyWord}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SearchTagBar;
