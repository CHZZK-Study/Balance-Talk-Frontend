import React from 'react';
import { css } from '@emotion/react';
import PostItemImage from './PostItemImage';
import TagButton from '../Buttons/TagButton';
import Eye from '../../assets/svg/Eye';
import Comment from '../../assets/svg/Comment';
import { ImageInfo, Post } from '../../types/post';
import HeartButton from '../Buttons/HeartButton';
import {
  etcButtonText,
  etcButtonWrapper,
  postItemContainer,
  postItemDday,
  postItemTitle,
  postItemTitleWrapper,
  tagWrapper,
} from './PostItem.style';

type PostItemProps = {
  post: Post;
};

const PostItem = ({ post }: PostItemProps) => {
  const imagesInfo: ImageInfo[] = [
    {
      optionImg: post.balanceOptions[0].optionImg,
      optionTitle: post.balanceOptions[0].optionTitle,
    },
    {
      optionImg: post.balanceOptions[1].optionImg,
      optionTitle: post.balanceOptions[1].optionTitle,
    },
  ];

  const isLiked = post.myLike;
  return (
    <div css={postItemContainer}>
      <PostItemImage images={imagesInfo} />
      <div css={postItemTitleWrapper}>
        <h4 css={postItemTitle}>{post.title}</h4>
        <div css={postItemDday}>D-day</div>
      </div>
      <div css={tagWrapper}>
        {post &&
          post.tags.map((tag) => {
            return <TagButton key={tag} tag={tag} />;
          })}
      </div>
      <div css={etcButtonWrapper}>
        <div css={css({ height: '24px' })}>
          <Eye />
          <span css={etcButtonText}>{post.views}</span>
          <Comment />
          <span css={etcButtonText}>{post.commentCount}</span>
        </div>
        <div css={css({ display: 'flex', height: '100%' })}>
          <HeartButton isLiked={isLiked} postId={post.id} />
          <div
            css={css({
              marginTop: '11px',
              fontFamily: 'SpoqaHanSansNeo-Regular',
            })}
          >
            {post?.likeCount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
