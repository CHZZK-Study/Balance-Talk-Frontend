import React, { ComponentPropsWithRef } from 'react';
import {
  hoverStyling,
  mypageListItemContainer,
  mypageTextStyling,
  noContainer,
  withoutNoContainer,
} from './ListItem.style';
import { ItemCommentsType } from '../../../types/history';

export interface ItemCommentsProps extends ComponentPropsWithRef<'li'> {
  item: ItemCommentsType;
}

const ItemComments = ({ item }: ItemCommentsProps) => {
  return (
    <li css={mypageListItemContainer}>
      <span css={[mypageTextStyling('xSmall'), noContainer]}>{item.id}</span>
      <div css={[withoutNoContainer, hoverStyling]}>
        <p css={mypageTextStyling('small')}>{item.comment}</p>
        <p css={mypageTextStyling('xSmall')}>{item.date}</p>
        <p css={[mypageTextStyling('xSmall')]}>{item.title}</p>
      </div>
    </li>
  );
};

export default ItemComments;
