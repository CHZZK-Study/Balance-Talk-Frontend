import React, { useState } from 'react';
import PageNavigation from '../../../../components/Paginavigation/Paginavigation';
import List from '../../MypageSections/List/List';
import ItemComments from '../../MypageSections/ListItem/ItemComments';

const CommentsPage = () => {
  const items = [
    {
      id: 1,
      title: '게시글 제목입니다.',
      comment: '댓글 내용입니다.',
      date: '2024.02.23',
    },
    {
      id: 2,
      title: '게시글 제목입니다.',
      comment: '댓글 내용입니다.',
      date: '2024.02.23',
    },
    {
      id: 3,
      title: '게시글 제목입니다.',
      comment: '댓글 내용입니다.',
      date: '2024.02.23',
    },
  ];
  const [selectedPage, setSelectedPage] = useState(1);
  const pages: number[] = [1];
  return (
    <>
      <List>
        {items.map((item) => {
          return <ItemComments key={item.id} item={item} />;
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
