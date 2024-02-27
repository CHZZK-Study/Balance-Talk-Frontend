import React, { useState } from 'react';
import PageNavigation from '../../../../components/Paginavigation/Paginavigation';
import List from '../../MypageSections/List/List';
import ItemPosts from '../../MypageSections/ListItem/ItemPosts';

const PostsPage = () => {
  const items = [
    {
      id: 1,
      title: '게시글 제목입니다.',
      date: '2024.02.23',
    },
    {
      id: 2,
      title: '게시글 제목입니다.',
      date: '2024.02.23',
    },
    {
      id: 3,
      title: '게시글 제목입니다.',
      date: '2024.02.23',
    },
    {
      id: 4,
      title: '게시글 제목입니다.',
      date: '2024.02.23',
    },
    {
      id: 5,
      title: '게시글 제목입니다.',
      date: '2024.02.23',
    },
    {
      id: 6,
      title: '게시글 제목입니다.',
      date: '2024.02.23',
    },
    {
      id: 7,
      title: '게시글 제목입니다.',
      date: '2024.02.23',
    },
    {
      id: 8,
      title: '게시글 제목입니다.',
      date: '2024.02.23',
    },
    {
      id: 9,
      title: '게시글 제목입니다.',
      date: '2024.02.23',
    },
    {
      id: 10,
      title: '게시글 제목입니다.',
      date: '2024.02.23',
    },
  ];
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

export default PostsPage;
