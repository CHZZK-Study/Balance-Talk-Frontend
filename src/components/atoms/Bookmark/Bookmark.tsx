import React, { useState, useEffect } from 'react';
import { BookmarkProps } from '@/types/atoms';
import { BookmarkDF, BookmarkPR } from '@/assets';
import * as S from './Bookmark.style';

const Bookmark = ({ bookmarkState = false, ...attributes }: BookmarkProps) => {
  const [isPressed, setIsPressed] = useState(bookmarkState);

  useEffect(() => {
    setIsPressed(bookmarkState);
  }, [bookmarkState]);

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
