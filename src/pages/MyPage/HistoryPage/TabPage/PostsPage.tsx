/* eslint-disable @typescript-eslint/no-misused-promises */
import PageNavigation from '@/components/common/Pagination/Pagination';
import List from '@/components/mypage/List/List';
import ItemMyPosts from '@/components/mypage/ListItem/ItemMyPosts';
import ItemNull from '@/components/mypage/ListItem/ItemNull';
import { NULL } from '@/constants/message';
import { useMyPostsQuery } from '@/hooks/api/mypage/useMyPostsQuery';
import { MyPostsContentType } from '@/types/mypage';
import { createRangeArray } from '@/utils/array';
import { useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const PostsPage = () => {
  const [selectedPage, setSelectedPage] = useState(1);
  const { myPosts, isLoading } = useMyPostsQuery(selectedPage - 1);
  const pages = createRangeArray(myPosts?.totalPages || 0);
  const queryClient = useQueryClient();

  const handleChangeNavigate = async (page: number) => {
    setSelectedPage(page);
    await queryClient.invalidateQueries({
      queryKey: ['myPosts', page],
    });
  };

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <List>
        {myPosts && myPosts.totalPages > 0 ? (
          myPosts.content.map((item: MyPostsContentType) => {
            return (
              <ItemMyPosts
                id={item.postId.toString()}
                key={uuidv4()}
                item={item}
              />
            );
          })
        ) : (
          <ItemNull>{NULL.POSTS}</ItemNull>
        )}
      </List>
      {myPosts && myPosts.totalPages > 0 && (
        <PageNavigation
          pages={pages}
          selected={selectedPage}
          maxPage={pages.length}
          onChangeNavigate={handleChangeNavigate}
        />
      )}
    </>
  );
};

export default PostsPage;
