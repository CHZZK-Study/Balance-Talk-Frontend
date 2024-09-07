import React from 'react';
import ProfileInfo from '@/components/atoms/ProfileInfo/ProfileInfo';
import * as S from './SideBox.style';

export interface SideBoxProps extends React.ComponentPropsWithoutRef<'div'> {
  postsCount: number;
  bookmarkedPostsCount: number;
}
const SideBox = ({
  postsCount,
  bookmarkedPostsCount,
  ...props
}: SideBoxProps) => {
  return (
    <div css={S.sideBoxContainer} {...props}>
      <span css={S.sideBoxLabel}>활동 정보</span>
      <div css={S.infoWrapper}>
        <ProfileInfo count={postsCount} label="작성한 글" />
        <ProfileInfo count={bookmarkedPostsCount} label="게시글 저장" />
      </div>
    </div>
  );
};

export default SideBox;
