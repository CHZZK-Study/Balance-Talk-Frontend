import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { MyPostsType } from '../../../types/history';
import {
  hoverStyling,
  mypageListItemContainer,
  mypageTextStyling,
  noContainer,
  withoutNoContainer,
} from './ListItem.style';

export interface MyPostsProps extends ComponentPropsWithRef<'li'> {
  item: MyPostsType;
}

const ItemMyPosts = ({ item }: MyPostsProps) => {
  return (
    <li css={mypageListItemContainer}>
      <span css={[mypageTextStyling('xSmall'), noContainer]}>{item.id}</span>
      <div css={withoutNoContainer}>
        <p css={[mypageTextStyling('small'), hoverStyling]}>{item.title}</p>
        <p css={mypageTextStyling('xSmall')}>{item.date}</p>
      </div>
    </li>
  );
};

export default forwardRef(ItemMyPosts);
