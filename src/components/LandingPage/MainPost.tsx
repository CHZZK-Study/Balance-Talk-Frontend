import React from 'react';
import { css } from '@emotion/react';
import { useQuery } from '@tanstack/react-query';
import PostImage from '../common/PostImage/PostImage';
import TagButton from '../Buttons/TagButton';
import HeartButton from '../Buttons/HeartButton';
import Eye from '../../assets/svg/Eye';
import Comment from '../../assets/svg/Comment';
import { Post, VoteInfo } from '../../types/post';
import { fetchVoteCount } from '../../api/posts/posts';
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
  post?: Post;
};

const calculateTotalVoteCount = (data: VoteInfo[]) => {
  return data.reduce((prev, current) => {
    return prev + current.voteCount;
  }, 0);
};

const MainPost = ({ post }: MainPostProps) => {
  const postId = post?.id;

  const { data } = useQuery({
    queryKey: ['posts', 'vote', postId],
    queryFn: () => fetchVoteCount(postId as number),
    enabled: !!postId,
  });

  const isLiked = post?.myLike;
  const images = post?.balanceOptions;

  const postInfo = post;

  return (
    <div css={css({ display: 'flex' })}>
      <PostImage images={images} size="large" />
      <div css={mainPostInfoWrapper}>
        <div css={mainPostTitleWrapper}>
          <h3 css={mainPostTitle}>{postInfo?.title}</h3>
          <div css={TagButtonWrapper}>
            {postInfo &&
              postInfo.tags.map((tag) => {
                return <TagButton key={tag} tag={tag} />;
              })}
          </div>
        </div>
        <div css={voteCount}>
          현재 투표수 : {data && calculateTotalVoteCount(data)}
        </div>
        <div css={voteButtonWrapper}>
          <VoteButton />
        </div>
        <div css={etcButtonWrapper}>
          <div css={css({ height: '24px' })}>
            <Eye />
            <span css={etcButtonText}>{postInfo?.views}</span>
            <Comment />
            <span css={etcButtonText}>{postInfo?.commentCount}</span>
          </div>
          <div
            css={css({ display: 'flex', height: '100%', marginBottom: '1px' })}
          >
            <HeartButton isLiked={isLiked} postId={postId} />
            <span
              css={css({
                marginTop: '11px',
                fontFamily: 'SpoqaHanSansNeo-Regular',
              })}
            >
              {postInfo?.likeCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPost;
