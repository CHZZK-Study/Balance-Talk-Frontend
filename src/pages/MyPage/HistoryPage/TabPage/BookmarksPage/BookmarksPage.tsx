import { useCheckboxSelect } from '@/hooks/mypage/userHistory/useCheckboxSelect';
import React, { useState } from 'react';
import PageNavigation from '../../../../../components/common/Paginavigation/Paginavigation';
import Button from '../../../../../components/design/Button/Button';
import CheckBox from '../../../../../components/design/CheckBox/CheckBox';
import List from '../../../../../components/mypage/List/List';
import ItemMyBookmarksPosts from '../../../../../components/mypage/ListItem/ItemMyBookmarksPosts';
import { NULL } from '../../../../../constants/message';
import { useMyBookmarksPostsQuery } from '../../../../../hooks/api/useMyBookmarksPostsQuery';
import { MyBookmarksPostsType } from '../../../../../types/history';
import { bookmarksBtnContainer } from './BookmarksPage.style';

const BookmarksPage = () => {
  const { myBookmarksPosts } = useMyBookmarksPostsQuery();
  const [selectedPage, setSelectedPage] = useState(1);
  const pages: number[] = [1];
  const { isAllChecked, checkItems, handleSingleChecked, handleAllChecked } =
    useCheckboxSelect(myBookmarksPosts);
  return (
    <>
      <div css={bookmarksBtnContainer}>
        <CheckBox
          label="전체 선택"
          isChecked={isAllChecked}
          handleChecked={handleAllChecked}
        />
        <Button size="xSmall">북마크 해제</Button>
      </div>

      <List>
        {myBookmarksPosts && myBookmarksPosts.length > 0
          ? myBookmarksPosts.map((item: MyBookmarksPostsType) => {
              return (
                <ItemMyBookmarksPosts
                  id={item.id.toString()}
                  key={item.id}
                  item={item}
                  isChecked={checkItems.includes(item.id.toString())}
                  handleChecked={handleSingleChecked}
                />
              );
            })
          : NULL.BOOKMARKS}
      </List>
      <PageNavigation
        pages={pages}
        selected={selectedPage}
        maxPage={pages.length}
        onChangeNavigate={(page: number) => {
          setSelectedPage(page);
        }}
      />
    </>
  );
};

export default BookmarksPage;
