import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { ItemPostsType } from '../../../types/mypage';
import {
  mypageListItemContainer,
  mypageTextSmallStyling,
  mypageTextXsmallStyling,
  noContainer,
  withoutNoContainer,
} from './ListItem.style';

export interface ItemPostsProps extends ComponentPropsWithRef<'li'> {
  item: ItemPostsType;
}

const ItemPosts = ({ item }: ItemPostsProps) => {
  return (
    <li css={mypageListItemContainer}>
      <span css={[mypageTextXsmallStyling, noContainer]}>{item.id}</span>
      <div css={withoutNoContainer}>
        <p css={mypageTextSmallStyling}>{item.title}</p>
        <p css={mypageTextXsmallStyling}>{item.date}</p>
      </div>
    </li>
  );
};

export default forwardRef(ItemPosts);
