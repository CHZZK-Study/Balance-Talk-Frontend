import { css } from '@emotion/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import BalanceOptionCardsSection from './BalanceOptionCardsSection/BalanceOptionCardsSection';
import CommentsSection from './CommentsSection/CommentsSection';
import { fetchPostById } from '../../api/posts/posts';
import CreatorSection from './CreatorSection/CreatorSection';
import UserUtilitySection from './UserUtilitySection/UserUtilitySection';
import { ImageInfo } from '../../types/post';

const PostPage = () => {
  const postId = Number(useParams().id);
  const { isLoading, data: post } = useQuery({
    queryKey: ['posts', postId],
    queryFn: () => fetchPostById(postId),
  });

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div css={css({ margin: '0.5rem 15%' })}>
      <BalanceOptionCardsSection
        title={post?.title || 'title'}
        views={post?.views || 0}
        likeCount={post?.likeCount || 0}
        tags={post?.tags || []}
        balanceOptions={post?.balanceOptions || []}
      />

      <div
        css={css({
          display: 'flex',
          justifyContent: 'space-between',
        })}
      >
        {post?.creatorId && <CreatorSection creatorId={post?.creatorId} />}
        <UserUtilitySection />
      </div>
      <CommentsSection
        postId={postId}
        balanceOptionTitles={
          post?.balanceOptions?.map(
            (balanceOption: ImageInfo) => balanceOption?.optionTitle,
          ) || []
        }
      />
    </div>
  );
};

export default PostPage;
