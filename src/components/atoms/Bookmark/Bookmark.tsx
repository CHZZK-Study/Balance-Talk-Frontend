import React, { useState, forwardRef } from 'react';
import type { ComponentPropsWithRef, ForwardedRef } from 'react';
import { BookmarkDF, BookmarkPR } from '@/assets';
import * as S from './Bookmark.style';

export interface BookmarkProps extends ComponentPropsWithRef<'button'> {
  initialState?: 'default' | 'press';
}

const Bookmark = (
  { initialState = 'default', ...attributes }: BookmarkProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  const [state, setState] = useState<'default' | 'press'>(initialState);

  const handleClick = () => {
    setState((prevState) => (prevState === 'default' ? 'press' : 'default'));
  };

  const renderIcon = () => {
    switch (state) {
      case 'default':
        return <BookmarkDF css={S.icon} />;
      case 'press':
        return <BookmarkPR css={S.icon} />;
      default:
        return null;
    }
  };

  return (
    <button
      type="button"
      ref={ref}
      css={S.bookmarkButton}
      {...attributes}
      onClick={handleClick}
    >
      {' '}
      {renderIcon()}
    </button>
  );
};

export default forwardRef(Bookmark);
