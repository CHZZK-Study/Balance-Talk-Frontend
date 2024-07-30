import React, { forwardRef } from 'react';
import type { ComponentPropsWithRef, ForwardedRef } from 'react';
import { BookmarkDF, BookmarkPR } from '@/assets';
import * as S from './Bookmark.style';

export interface BookmarkProps extends ComponentPropsWithRef<'button'> {
  state: 'default' | 'press';
}

const Bookmark = (
  { state, ...attributes }: BookmarkProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  const renderIcon = () => {
    switch (state) {
      case 'default':
        return <BookmarkDF />;
      case 'press':
        return <BookmarkPR />;
      default:
        return null;
    }
  };

  return (
    <button type="button" ref={ref} css={S.bookmarkButton} {...attributes}>
      {renderIcon()}
    </button>
  );
};

export default forwardRef(Bookmark);
