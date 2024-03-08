import React, { ComponentPropsWithRef } from 'react';
import { MyVotedPostsType } from '../../../types/history';
import {
  hoverStyling,
  mypageListItemContainer,
  mypageTextStyling,
  noContainer,
  withoutNoContainer,
} from './ListItem.style';

export interface MyVotedPostsProps extends ComponentPropsWithRef<'li'> {
  item: MyVotedPostsType;
}

const ItemMyVotedPosts = ({ item }: MyVotedPostsProps) => {
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

export default ItemMyVotedPosts;
