import React from 'react';
import * as S from './SearchTalkPickItem.style';

export interface SearchTalkPickItemProps {
  title: string;
  date: string;
  content: string;
  imgUrl: string;
}

const SearchTalkPickItem = ({
  title,
  date,
  content,
  imgUrl,
}: SearchTalkPickItemProps) => {
  return (
    <div css={S.searchTalkPickItemStyle}>
      <div css={S.leftContentStyle}>
        <div css={S.titleWrapStyle}>
          <div css={S.titleStyle}>{title}</div>
          <div css={S.dateStyle}>{date}</div>
        </div>
        <div css={S.contentWrapStyle}>{content}</div>
      </div>

      <div css={S.imageContainerStyle}>
        <img
          css={S.imageContainerStyle}
          src={imgUrl}
          alt="representativeImage"
        />
      </div>
    </div>
  );
};
export default SearchTalkPickItem;
