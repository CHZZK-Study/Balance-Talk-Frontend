/* eslint-disable @typescript-eslint/no-misused-promises */
import PageNavigation from '@/components/common/Paginavigation/Paginavigation';
import List from '@/components/mypage/List/List';
import ItemMyCommentsPosts from '@/components/mypage/ListItem/ItemMyCommentsPosts';
import ItemNull from '@/components/mypage/ListItem/ItemNull';
import { NULL } from '@/constants/message';
import { useMyCommentsPostsQuery } from '@/hooks/api/useMyCommentsPostsQuery';
import { MyCommentsPostsContentType } from '@/types/mypage';
import { createRangeArray } from '@/utils/array';
import { useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';

const CommentsPage = () => {
  const [selectedPage, setSelectedPage] = useState(1);
  const { myCommentsPosts, isLoading } = useMyCommentsPostsQuery(
    selectedPage - 1,
  );
  const pages = createRangeArray(myCommentsPosts?.totalPages || 0);
  const queryClient = useQueryClient();

  const handleChangeNavigate = async (page: number) => {
    setSelectedPage(page);
    await queryClient.invalidateQueries({
      queryKey: ['myCommentsPosts', page],
    });
  };

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <List>
        {myCommentsPosts && myCommentsPosts.totalPages > 0 ? (
          myCommentsPosts.content.map((item: MyCommentsPostsContentType) => {
            return (
              <ItemMyCommentsPosts
                id={item.postId.toString()}
                key={item.postId}
                item={item}
              />
            );
          })
        ) : (
          <ItemNull>{NULL.COMMENTS}</ItemNull>
        )}
      </List>
      <PageNavigation
        pages={pages}
        selected={selectedPage}
        maxPage={pages.length}
        onChangeNavigate={handleChangeNavigate}
      />
    </>
  );
};

export default CommentsPage;
