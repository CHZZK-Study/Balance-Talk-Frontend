import React from 'react';
import { css } from '@emotion/react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import PostImage from '../common/PostImage/PostImage';
import TagButton from '../Buttons/TagButton';
import HeartButton from '../Buttons/HeartButton';
import Eye from '../../assets/svg/Eye';
import Comment from '../../assets/svg/Comment';
import { Post, VoteInfo } from '../../types/post';
import { fetchVoteCount } from '../../api/posts';
import {
  TagButtonWrapper,
  etcButtonText,
  etcButtonWrapper,
  mainPostInfoWrapper,
  mainPostTitle,
  mainPostTitleWrapper,
  voteButtonWrapper,
  voteCount,
} from './MainPost.style';
import VoteButton from './VoteButton';

type MainPostProps = {
  post: Post;
};

const calculateTotalVoteCount = (data: VoteInfo[]) => {
  return data.reduce((prev, current) => {
    return prev + current.voteCount;
  }, 0);
};

const MainPost = ({ post }: MainPostProps) => {
  const postId = post?.id;

  const { data } = useQuery({
    queryKey: ['posts', 'votes', postId],
    queryFn: () => fetchVoteCount(postId),
    enabled: !!postId,
  });

  const isLiked = post?.myLike;
  const images = post?.balanceOptions;

  const postInfo = post;
  const navigate = useNavigate();
  return (
    <div css={css({ display: 'flex', margin: '10px' })}>
      <PostImage images={images} size="large" postId={post?.id} />
      <div css={mainPostInfoWrapper}>
        <div css={mainPostTitleWrapper}>
          <h3 css={mainPostTitle}>
            {postInfo?.title.length > 15
              ? `${postInfo?.title.slice(0, 13)}...`
              : postInfo?.title}
          </h3>
          <div css={TagButtonWrapper}>
            {postInfo?.postTags?.map((tag) => {
              if (tag) {
                return <TagButton key={tag.tagName} tag={tag.tagName} />;
              }
              return <br />;
            })}
          </div>
        </div>
        <div css={voteCount}>
          현재 투표수 : {(data && calculateTotalVoteCount(data)) || '0'}
        </div>
        <div
          css={voteButtonWrapper}
          onClick={() => {
            navigate(`posts/${postId}`);
          }}
          role="presentation"
        >
          <VoteButton />
        </div>
        <div css={etcButtonWrapper}>
          <div css={css({ height: '24px' })}>
            <Eye />
            <span css={etcButtonText}>{postInfo?.views || '0'}</span>
            <Comment />
            <span css={etcButtonText}>{postInfo?.commentsCount || '0'}</span>
          </div>
          <div
            css={css({ display: 'flex', height: '100%', marginBottom: '1px' })}
          >
            <HeartButton isLiked={isLiked} postId={postId} />
            <span
              css={css({
                marginTop: '11px',
              })}
            >
              {postInfo?.likesCount || '0'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPost;
