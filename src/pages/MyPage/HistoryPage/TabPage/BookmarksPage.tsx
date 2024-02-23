import React, { useState } from 'react';
import List from '../../../../components/Mypage/List/List';
import PageNavigation from '../../../../components/Paginavigation/Paginavigation';

const BookmarksPage = () => {
  const [selectedPage, setSelectedPage] = useState(1);
  const pages: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <List>
        {items.map((item) => {
          return <ItemPosts key={item.id} item={item} />;
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
