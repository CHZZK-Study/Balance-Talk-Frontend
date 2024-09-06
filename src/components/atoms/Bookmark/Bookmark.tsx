import React, { useState, useEffect, ComponentPropsWithRef } from 'react';
import { BookmarkDF, BookmarkPR } from '@/assets';
import * as S from './Bookmark.style';

export interface BookmarkProps extends ComponentPropsWithRef<'button'> {
  bookmarked?: boolean;
}

const Bookmark = ({ bookmarked = false, ...attributes }: BookmarkProps) => {
  const [isPressed, setIsPressed] = useState(bookmarked);

  useEffect(() => {
    setIsPressed(bookmarked);
  }, [bookmarked]);

  const handleClick = () => {
    setIsPressed((prevState) => !prevState);
  };

  return (
    <button
      type="button"
      css={S.bookmarkButton}
      onClick={handleClick}
      {...attributes}
    >
      {isPressed ? <BookmarkPR css={S.icon} /> : <BookmarkDF css={S.icon} />}
    </button>
  );
};

export default Bookmark;
