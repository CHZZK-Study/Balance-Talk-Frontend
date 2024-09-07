import React from 'react';
import InfoLabel from '@/components/atoms/InfoLabel/InfoLabel';
import Bookmark, { BookmarkProps } from '@/components/atoms/Bookmark/Bookmark';
import * as S from './MyContentBox.style';

export interface MyContentBoxProps {
  title: string;
  commentCount: number;
  bookmarks: number;
  showBookmark?: boolean;
  bookmarked?: BookmarkProps['bookmarked'];
}
const MyContentBox = ({
  title,
  commentCount,
  bookmarks,
  showBookmark = false,
  bookmarked = false,
}: MyContentBoxProps) => {
  return (
    <div css={S.infoContainer}>
      <div css={S.textContainer}>
        <p css={S.titleLabel}>{title}</p>
      </div>
      <InfoLabel label="톡댓톡" count={commentCount} />
      <InfoLabel label="저장" count={bookmarks} />
      {showBookmark && (
        <Bookmark bookmarked={bookmarked} css={S.bookmarkWrapper} />
      )}
    </div>
  );
};

export default MyContentBox;
