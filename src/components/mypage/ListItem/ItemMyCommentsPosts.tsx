import React, { ComponentPropsWithRef } from 'react';
import { MyCommentsPostsContentType } from '@/types/mypage';
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
  return (
    <li css={mypageListItemContainer}>
      <span css={[mypageTextStyling('xSmall'), noContainer]}>
        {item.postId}
      </span>
      <div css={[withoutNoContainer, hoverStyling]}>
        <p css={mypageTextStyling('small')}>{item.commentContent}</p>
        <p css={mypageTextStyling('xSmall')}>{item.commentCreatedAt}</p>
        <p css={[mypageTextStyling('xSmall')]}>{item.postTitle}</p>
      </div>
    </li>
  );
};

export default ItemMyCommentsPosts;
