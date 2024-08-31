import React from 'react';
import Button from '@/components/atoms/Button/Button';
import SearchBar from '@/components/atoms/SearchBar/SearchBar';
import { KEYWORD_TAG } from '@/constants/keywordTag';
import * as S from './SearchTagBar.style';

const SearchTagBar = () => {
  return (
    <div css={S.searchBarContainerStyling}>
      <SearchBar />
      <div css={S.btnWrapperStyling}>
        {KEYWORD_TAG.map((keyWord) => (
          <Button key={keyWord} size="large" variant="outlinePrimary">
            #{keyWord}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SearchTagBar;
