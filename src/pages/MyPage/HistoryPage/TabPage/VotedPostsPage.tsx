import React, { useState } from 'react';
import PageNavigation from '../../../../components/common/Paginavigation/Paginavigation';
import List from '../../../../components/mypage/List/List';
import ItemMyVotedPosts from '../../../../components/mypage/ListItem/ItemMyVotedPosts';
import { mockMyVotedPosts } from '../../../../mocks/data/history';

const VotedPostsPage = () => {
  const items = mockMyVotedPosts;
  const [selectedPage, setSelectedPage] = useState(1);
  const pages: number[] = [1];
  return (
    <>
      <List>
        {items.map((item) => {
          return <ItemMyVotedPosts key={item.id} item={item} />;
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

export default VotedPostsPage;
