import React from 'react';
import * as S from './NoResultsMessage.style';

interface NoResultsMessageProps {
  keyword: string;
}

export const NoResultsMessage = ({ keyword }: NoResultsMessageProps) => {
  return (
    <div css={S.messageContainerStyle}>
      <div>
        <span css={S.topMessageStyle}>
          <span css={S.keywordStyle}>&lsquo;{keyword}&lsquo;</span>에 대한
          검색결과가 없습니다.
        </span>
      </div>
      <div css={S.detailMessageStyle}>
        <ul css={S.ulStyle}>
          <li>단어의 철자가 정확한지 확인해 보세요.</li>
          <li>검색 옵션을 변경해 다시 검색해 보세요.</li>
        </ul>
      </div>
    </div>
  );
};
