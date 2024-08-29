import React from 'react';
import SearchTalkPickItem, {
  SearchTalkPickItemProps,
} from '@/components/atoms/SearchTalkPickItem/SearchTalkPickItem';
import Divider from '@/components/atoms/Divider/Divider';
import * as S from './SearchTalkPickList.style';

export interface SearchTalkPickListProps {
  searchTalkPickItems: SearchTalkPickItemProps[];
}

const SearchTalkPickList = ({
  searchTalkPickItems,
}: SearchTalkPickListProps) => {
  return (
    <div css={S.listContainerStyle}>
      {searchTalkPickItems.map((searchItem, idx) => (
        <div key={searchItem.title}>
          <SearchTalkPickItem
            title={searchItem.title}
            date={searchItem.date}
            content={searchItem.content}
            imgUrl={searchItem.imgUrl}
          />
          {idx < searchTalkPickItems.length - 1 && (
            <div css={S.dividerStyle}>
              <Divider length={1065} orientation="width" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default SearchTalkPickList;
