import { MyVotedPostsContentType } from '@/types/mypage';
import { getYearMonthDay } from '@/utils/date';
import React, { ComponentPropsWithRef } from 'react';
import {
  hoverStyling,
  mypageListItemContainer,
  mypageTextStyling,
  withoutNoContainer,
  noContainer,
} from './ListItem.style';

export interface MyVotedPostsProps extends ComponentPropsWithRef<'li'> {
  item: MyVotedPostsContentType;
}

const ItemMyVotedPosts = ({ item }: MyVotedPostsProps) => {
  return (
    <li css={mypageListItemContainer}>
      <span css={[mypageTextStyling('xSmall'), noContainer]}>
        {item.postId}
      </span>
      <div css={[withoutNoContainer, hoverStyling]}>
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
