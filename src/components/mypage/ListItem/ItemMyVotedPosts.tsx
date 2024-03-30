/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { MyVotedPostsContentType } from '@/types/mypage';
import { getYearMonthDay } from '@/utils/date';
import React, { ComponentPropsWithRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  hoverStyling,
  mypageListItemContainer,
  mypageTextStyling,
  noContainer,
  withoutNoContainer,
} from './ListItem.style';

export interface MyVotedPostsProps extends ComponentPropsWithRef<'li'> {
  item: MyVotedPostsContentType;
}

const ItemMyVotedPosts = ({ item }: MyVotedPostsProps) => {
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
        <p
          css={mypageTextStyling('small')}
        >{`투표진영: ${item.balanceOptionTitle}`}</p>
        <p css={mypageTextStyling('xSmall')}>{getYearMonthDay(item.votedAt)}</p>
        <p css={mypageTextStyling('xSmall')}>{item.postTitle}</p>
      </div>
    </li>
  );
};

export default ItemMyVotedPosts;
