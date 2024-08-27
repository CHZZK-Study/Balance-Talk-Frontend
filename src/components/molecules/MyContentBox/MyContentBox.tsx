import React from 'react';
import InfoLabel from '@/components/atoms/InfoLabel/InfoLabel';
import Bookmark from '@/components/atoms/Bookmark/Bookmark';
import { MyContentBoxProps } from '@/types/molecules';
import * as S from './MyContentBox.style';

const MyContentBox = ({
  title,
  commentCount,
  bookmarks,
  showBookmark = false,
  bookmarkState = false,
}: MyContentBoxProps) => {
  return (
    <div css={S.infoContainer}>
      <div css={S.textContainer}>
        <p css={S.titleLabel}>{title}</p>
      </div>
      <InfoLabel label="톡댓톡" count={commentCount} />
      <InfoLabel label="저장" count={bookmarks} />
      {showBookmark && (
        <Bookmark bookmarkState={bookmarkState} css={S.bookmarkWrapper} />
      )}
    </div>
  );
};

export default MyContentBox;
