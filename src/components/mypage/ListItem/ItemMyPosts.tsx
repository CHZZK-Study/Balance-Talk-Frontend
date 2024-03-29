import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { MyPostsContentType } from '@/types/mypage';
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
  return (
    <li css={mypageListItemContainer}>
      <span css={[mypageTextStyling('xSmall'), noContainer]}>
        {item.postId}
      </span>
      <div css={withoutNoContainer}>
        <p css={[mypageTextStyling('small'), hoverStyling]}>{item.postTitle}</p>
        <p css={mypageTextStyling('xSmall')}>{item.postCreatedAt}</p>
      </div>
    </li>
  );
};

export default forwardRef(ItemMyPosts);
