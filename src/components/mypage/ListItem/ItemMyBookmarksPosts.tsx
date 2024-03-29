import React, { ChangeEvent, ComponentPropsWithRef } from 'react';
import { MyBookmarksPostsContentType } from '../../../types/mypage';
import CheckBox from '../../design/CheckBox/CheckBox';
import {
  hoverStyling,
  mypageListItemContainer,
  mypageTextStyling,
  noContainer,
  withoutNoContainer,
} from './ListItem.style';

export interface MyBookmarksPostsProps extends ComponentPropsWithRef<'li'> {
  item: MyBookmarksPostsContentType;
  isChecked: boolean;
  handleChecked: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ItemMyBookmarksPosts = ({
  id,
  item,
  isChecked,
  handleChecked,
}: MyBookmarksPostsProps) => {
  return (
    <li css={mypageListItemContainer}>
      <CheckBox id={id} isChecked={isChecked} handleChecked={handleChecked} />
      <span css={[mypageTextStyling('xSmall'), noContainer]}>{id}</span>
      <div css={withoutNoContainer}>
        <p css={[mypageTextStyling('small'), hoverStyling]}>{item.postTitle}</p>
        <p css={mypageTextStyling('xSmall')}>{item.bookmarkedAt}</p>
      </div>
    </li>
  );
};

export default ItemMyBookmarksPosts;
