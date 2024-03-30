/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { MyCommentsPostsContentType } from '@/types/mypage';
import React, { ComponentPropsWithRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  hoverStyling,
  mypageListItemContainer,
  mypageTextStyling,
  noContainer,
  withoutNoContainer,
} from './ListItem.style';

export interface MyCommentsPostsProps extends ComponentPropsWithRef<'li'> {
  item: MyCommentsPostsContentType;
}

const ItemMyCommentsPosts = ({ item }: MyCommentsPostsProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/posts/${item.postId}`);
  };
  return (
    <li css={mypageListItemContainer}>
      <span css={[mypageTextStyling('xSmall'), noContainer]}>
        {item.postId}
      </span>
      <div onClick={handleClick} css={[withoutNoContainer, hoverStyling]}>
        <p css={mypageTextStyling('small')}>{item.commentContent}</p>
        <p css={mypageTextStyling('xSmall')}>{item.commentCreatedAt}</p>
        <p css={[mypageTextStyling('xSmall')]}>{item.postTitle}</p>
      </div>
    </li>
  );
};

export default ItemMyCommentsPosts;
