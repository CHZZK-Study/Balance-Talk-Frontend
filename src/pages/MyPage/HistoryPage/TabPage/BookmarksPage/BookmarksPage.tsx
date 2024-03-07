import React, { useState } from 'react';
import PageNavigation from '../../../../../components/common/Paginavigation/Paginavigation';
import CheckBox from '../../../../../components/design/CheckBox/CheckBox';
import Button from '../../../../../components/design/Button/Button';
import { bookmarksBtnContainer } from './BookmarksPage.style';
import List from '../../../../../components/mypage/List/List';
import ItemMyBookmarksPosts from '../../../../../components/mypage/ListItem/ItemMyBookmarksPosts';
import { mockMyBookmarksPosts } from '../../../../../mocks/data/history';

const BookmarksPage = () => {
  const items = mockMyBookmarksPosts;
  const [selectedPage, setSelectedPage] = useState(1);
  const pages: number[] = [1];
  return (
    <>
      <div css={bookmarksBtnContainer}>
        <CheckBox label="전체 선택" />
        <Button size="xSmall">북마크 해제</Button>
      </div>

      <List>
        {items.map((item) => {
          return <ItemMyBookmarksPosts key={item.id} item={item} />;
        })}
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
