import React, { useState } from 'react';
import PageNavigation from '../../../../components/Paginavigation/Paginavigation';
import List from '../../sections/List/List';
import ItemVotedPosts from '../../sections/ListItem/ItemVotedPosts';

const VotedPostsPage = () => {
  const items = [
    {
      id: 1,
      title: '게시글 제목입니다.',
      date: '2024.02.23',
      position: '투표 진영: 찬성',
    },
  ];
  const [selectedPage, setSelectedPage] = useState(1);
  const pages: number[] = [1];
  return (
    <>
      <List>
        {items.map((item) => {
          return <ItemVotedPosts key={item.id} item={item} />;
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
