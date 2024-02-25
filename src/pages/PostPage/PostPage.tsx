import { css } from '@emotion/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import UserProfile from '../../components/UserProfile';
import { Profile, Like, Report, Share, Star } from '../../assets';
import BalanceOptionCardsSection from './BalanceOptionCardsSection/BalanceOptionCardsSection';
import CommentsSection from './CommentsSection/CommentsSection';
import { fetchPostById } from '../../api/posts/posts';

const PostPage = () => {
  const postId = Number(useParams().id);
  const { data: post } = useQuery({
    queryKey: ['posts', postId],
    queryFn: () => fetchPostById(postId),
  });

  return (
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
        <UserProfile name="balancetalk" img={Profile} joinAt="2024.01.01" />
        <div
          css={css({
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          })}
        >
          <div
            css={css({
              display: 'flex',
              gap: '1rem',
            })}
          >
            <Like />
            <Star />
            <Report />
            <Share />
          </div>
        </div>
      </div>
      <CommentsSection />
    </div>
  );
};

export default PostPage;
