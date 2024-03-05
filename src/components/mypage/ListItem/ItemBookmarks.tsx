import React, { ComponentPropsWithRef } from 'react';
import { ItemBookmarksType } from '../../../types/history';
import {
  hoverStyling,
  mypageListItemContainer,
  mypageTextStyling,
  noContainer,
  withoutNoContainer,
} from './ListItem.style';
import CheckBox from '../../design/CheckBox/CheckBox';

export interface ItemBookmarksProps extends ComponentPropsWithRef<'li'> {
  item: ItemBookmarksType;
}

const ItemBookmarks = ({ item }: ItemBookmarksProps) => {
  return (
    <li css={mypageListItemContainer}>
      <CheckBox />
      <span css={[mypageTextStyling('xSmall'), noContainer]}>{item.id}</span>
      <div css={withoutNoContainer}>
        <p css={[mypageTextStyling('small'), hoverStyling]}>{item.title}</p>
        <p css={mypageTextStyling('xSmall')}>{item.date}</p>
      </div>
    </li>
  );
};

export default ItemBookmarks;
