import React, { ComponentPropsWithRef } from 'react';
import { ItemVotedPostsType } from '../../../types/mypage';
import {
  hoverStyling,
  mypageListItemContainer,
  mypageTextStyling,
  noContainer,
  withoutNoContainer,
} from './ListItem.style';

export interface ItemVotedPostsProps extends ComponentPropsWithRef<'li'> {
  item: ItemVotedPostsType;
}

const ItemVotedPosts = ({ item }: ItemVotedPostsProps) => {
  return (
    <li css={mypageListItemContainer}>
      <span css={[mypageTextStyling('xSmall'), noContainer]}>{item.id}</span>
      <div css={[withoutNoContainer, hoverStyling]}>
        <p css={mypageTextStyling('small')}>{item.position}</p>
        <p css={mypageTextStyling('xSmall')}>{item.date}</p>
        <p css={mypageTextStyling('xSmall')}>{item.title}</p>
      </div>
    </li>
  );
};

export default ItemVotedPosts;
