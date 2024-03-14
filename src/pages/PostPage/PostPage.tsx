import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Divider from '@/components/common/Divider';
import BalanceOptionCardsSection from './BalanceOptionCardsSection/BalanceOptionCardsSection';
import CommentsSection from './CommentsSection/CommentsSection';
import { getPost } from '../../api/posts/posts';
import CreatorSection from './CreatorSection/CreatorSection';
import UserUtilitySection from './UserUtilitySection/UserUtilitySection';
import TitleSection from './TitleSection/TitleSection';
import { ImageInfo, Post, NPost } from '../../types/post';
import {
  ButtonSectionWrapper,
  ButtonStyleWrapper,
  PostPageWrapper,
  UserSectionWrapper,
} from './PostPage.style';

const PostPage = () => {
  const postId = Number(useParams().id);
  const { isLoading, data: post } = useQuery({
    queryKey: ['posts', postId],
    queryFn: () => getPost(postId),
    select: (data: { data: NPost }) => data?.data,
  });

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div css={PostPageWrapper}>
      <TitleSection
        title={post?.title || 'title'}
        views={post?.views || 0}
        likesCount={post?.likesCount || 0}
        postTags={post?.postTags || []}
      />
      <BalanceOptionCardsSection
        id={post?.id || 0}
        balanceOptions={post?.balanceOptions || []}
      />

      <div css={UserSectionWrapper}>
        {post && (
          <CreatorSection
            createdBy={post?.createdBy}
            createdAt={post?.createdAt}
          />
        )}
        <UserUtilitySection />
      </div>

      <div css={ButtonSectionWrapper}>
        <button css={ButtonStyleWrapper} type="button">
          댓글 확인하기
        </button>
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
