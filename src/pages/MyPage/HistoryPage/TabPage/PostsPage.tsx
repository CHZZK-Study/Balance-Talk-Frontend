import React, { useState } from 'react';
import PageNavigation from '../../../../components/common/Paginavigation/Paginavigation';
import List from '../../../../components/mypage/List/List';
import ItemMyPosts from '../../../../components/mypage/ListItem/ItemMyPosts';
import { mockMyPosts } from '../../../../mocks/data/history';

const PostsPage = () => {
  const items = mockMyPosts;
  const [selectedPage, setSelectedPage] = useState(1);
  const pages: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <List>
        {items.map((item) => {
          return <ItemMyPosts key={item.id} item={item} />;
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

export default PostsPage;
