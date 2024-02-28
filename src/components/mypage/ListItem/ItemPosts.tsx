import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { ItemPostsType } from '../../../types/mypage';
import {
  hoverStyling,
  mypageListItemContainer,
  mypageTextStyling,
  noContainer,
  withoutNoContainer,
} from './ListItem.style';

export interface ItemPostsProps extends ComponentPropsWithRef<'li'> {
  item: ItemPostsType;
}

const ItemPosts = ({ item }: ItemPostsProps) => {
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

export default forwardRef(ItemPosts);
