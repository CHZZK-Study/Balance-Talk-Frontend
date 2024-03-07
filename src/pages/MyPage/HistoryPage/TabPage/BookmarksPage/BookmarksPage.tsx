import React, { useState } from 'react';
import PageNavigation from '../../../../../components/common/Paginavigation/Paginavigation';
import CheckBox from '../../../../../components/design/CheckBox/CheckBox';
import Button from '../../../../../components/design/Button/Button';
import { bookmarksBtnContainer } from './BookmarksPage.style';
import List from '../../../../../components/mypage/List/List';
import ItemMyBookmarksPosts from '../../../../../components/mypage/ListItem/ItemMyBookmarksPosts';
import { useMyBookmarksPostsQuery } from '../../../../../hooks/api/useMyBookmarksPostsQuery';
import { NULL } from '../../../../../constants/message';
import { MyBookmarksPostsType } from '../../../../../types/history';

const BookmarksPage = () => {
  const { myBookmarksPosts } = useMyBookmarksPostsQuery();
  const [selectedPage, setSelectedPage] = useState(1);
  const pages: number[] = [1];
  return (
    <>
      <div css={bookmarksBtnContainer}>
        <CheckBox label="전체 선택" />
        <Button size="xSmall">북마크 해제</Button>
      </div>

      <List>
        {myBookmarksPosts
          ? myBookmarksPosts.map((item: MyBookmarksPostsType) => {
              return <ItemMyBookmarksPosts key={item.id} item={item} />;
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
