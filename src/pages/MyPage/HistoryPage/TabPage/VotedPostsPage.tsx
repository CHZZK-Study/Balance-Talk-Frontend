/* eslint-disable @typescript-eslint/no-misused-promises */
import PageNavigation from '@/components/common/Paginavigation/Paginavigation';
import List from '@/components/mypage/List/List';
import ItemMyVotedPosts from '@/components/mypage/ListItem/ItemMyVotedPosts';
import ItemNull from '@/components/mypage/ListItem/ItemNull';
import { NULL } from '@/constants/message';
import { useMyVotedPostsQuery } from '@/hooks/api/useMyVotedPostsQuery';
import { MyVotedPostsContentType } from '@/types/mypage';
import { createRangeArray } from '@/utils/array';
import { useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';

const VotedPostsPage = () => {
  const [selectedPage, setSelectedPage] = useState(1);
  const { myVotedPosts, isLoading } = useMyVotedPostsQuery(selectedPage - 1);
  const pages = createRangeArray(myVotedPosts?.totalPages || 0);
  const queryClient = useQueryClient();

  const handleChangeNavigate = async (page: number) => {
    setSelectedPage(page);
    await queryClient.invalidateQueries({
      queryKey: ['myBookmarksPosts', page],
    });
  };

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <List>
        {myVotedPosts && myVotedPosts.totalPages > 0 ? (
          myVotedPosts.content.map((item: MyVotedPostsContentType) => {
            return (
              <ItemMyVotedPosts
                id={item.postId.toString()}
                key={item.postId}
                item={item}
              />
            );
          })
        ) : (
          <ItemNull>{NULL.VOTES}</ItemNull>
        )}
      </List>
      {myVotedPosts && myVotedPosts.totalPages > 0 && (
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

export default VotedPostsPage;
