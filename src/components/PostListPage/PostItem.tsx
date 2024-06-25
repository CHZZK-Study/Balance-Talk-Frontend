import React from 'react';
import { ImageInfo, Post } from '@/types/post';
import { calculateDday } from '@/utils/calculateDday';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import HeartButton from '../Buttons/HeartButton';
import TagButton from '../Buttons/TagButton';
import {
  etcButtonText,
  etcButtonWrapper,
  postItemContainer,
  postItemDday,
  postItemTitle,
  postItemTitleWrapper,
  tagWrapper,
} from './PostItem.style';
import PostItemImage from './PostItemImage';

type PostItemProps = {
  post: Post;
};

const PostItem = ({ post }: PostItemProps) => {
  const navigate = useNavigate();

  const imagesInfo: ImageInfo[] = [
    {
      imageUrl: post.balanceOptions[0].imageUrl,
      title: post.balanceOptions[0].title,
    },
    {
      imageUrl: post.balanceOptions[1].imageUrl,
      title: post.balanceOptions[1].title,
    },
  ];

  const isLiked = post.myLike;
  const dDay = calculateDday(post.deadline);

  const dDayString = dDay < 0 ? `D+${dDay.toString().slice(1)}` : `D-${dDay}`;

  return (
    <div
      css={postItemContainer}
      onClick={() => navigate(`/posts/${post.id}`)}
      role="presentation"
    >
      <PostItemImage images={imagesInfo} />
      <div css={postItemTitleWrapper}>
        <h4 css={postItemTitle}>
          {post?.title.length > 15
            ? `${post?.title.slice(0, 13)}...`
            : post?.title}
        </h4>
        <div css={postItemDday}>{dDayString}</div>
      </div>
      <div css={tagWrapper}>
        {post &&
          post.postTags.map((tag) => {
            if (tag) {
              return <TagButton key={tag.tagName} tag={tag.tagName} />;
            }
            return <br />;
          })}
      </div>
      <div css={etcButtonWrapper}>
        <div css={css({ height: '24px' })}>
          <span css={etcButtonText}>{post.views || '0'}</span>
          <span css={etcButtonText}>{post.commentsCount || '0'}</span>
        </div>
        <div css={css({ display: 'flex', height: '100%' })}>
          <HeartButton isLiked={isLiked} postId={post.id} />
          <div
            css={css({
              marginTop: '11px',
            })}
          >
            {post?.likesCount || '0'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
