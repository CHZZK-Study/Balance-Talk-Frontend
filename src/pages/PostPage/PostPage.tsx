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
        <div
          className={css({
            display: 'flex',
            padding: '0.5rem',
            gap: '2rem',
          })}
        >
          <div
            className={css({
              fontFamily: 'SpoqaHanSansNeo-medium',
              fontSize: '3rem',
            })}
          >
            카페 주문
          </div>
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            })}
          >
            <TagButton tag="태그" />
            <TagButton tag="태그" />
          </div>
        </div>
        <div
          className={css({
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
            <Eye />
            <span>100</span>
          </div>
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            })}
          >
            <Heart />
            100
          </div>
        </div>
      </div>

      <div
        className={css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1rem',
          backgroundColor: '#EEEEEE',
        })}
      >
        <PostOptionCard />
        <div
          className={css({
            fontFamily: 'SpoqaHanSansNeo-medium',
            fontSize: '3rem',
          })}
        >
          VS
        </div>
        <PostOptionCard />
      </div>
      <div
        className={css({
          display: 'flex',
          justifyContent: 'space-between',
        })}
      >
        <UserProfile />
        <IconList />
      </div>

      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
        })}
      >
        <div
          className={css({
            marginTop: '1rem',
            marginBottom: '3rem',
            fontFamily: 'SpoqaHanSansNeo-regular',
            fontSize: '1.5rem',
          })}
        >
          댓글 40개
        </div>
        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
          })}
        >
          <CommentSection title="커피" color="EEEEEE" />
          <CommentSection title="쥬스" />
        </div>
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
