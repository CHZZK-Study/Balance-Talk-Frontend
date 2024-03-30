/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { MyPostsContentType } from '@/types/mypage';
import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  hoverStyling,
  mypageListItemContainer,
  mypageTextStyling,
  noContainer,
  withoutNoContainer,
} from './ListItem.style';

export interface MyPostsProps extends ComponentPropsWithRef<'li'> {
  item: MyPostsContentType;
}

const ItemMyPosts = ({ item }: MyPostsProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/posts/${item.postId}`);
  };
  return (
    <li css={mypageListItemContainer}>
      <span css={[mypageTextStyling('xSmall'), noContainer]}>
        {item.postId}
      </span>
      <div css={withoutNoContainer}>
        <p
          onClick={handleClick}
          css={[mypageTextStyling('small'), hoverStyling]}
        >
          {item.postTitle}
        </p>
        <p css={mypageTextStyling('xSmall')}>{item.postCreatedAt}</p>
      </div>
    </li>
  );
};

export default forwardRef(ItemMyPosts);
