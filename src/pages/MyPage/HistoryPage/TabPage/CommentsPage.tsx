import React, { useState } from 'react';
import PageNavigation from '../../../../components/common/Paginavigation/Paginavigation';
import List from '../../../../components/mypage/List/List';
import ItemMyCommentsPosts from '../../../../components/mypage/ListItem/ItemMyCommentsPosts';
import { mockMyCommentPosts } from '../../../../mocks/data/history';

const CommentsPage = () => {
  const items = mockMyCommentPosts;
  const [selectedPage, setSelectedPage] = useState(1);
  const pages: number[] = [1];
  return (
    <>
      <List>
        {items.map((item) => {
          return <ItemMyCommentsPosts key={item.id} item={item} />;
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

export default CommentsPage;
