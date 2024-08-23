import React from 'react';
import ProfileInfo from '@/components/atoms/ProfileInfo/ProfileInfo';
import * as S from './SideBox.style';

interface SideBoxProps extends React.ComponentPropsWithoutRef<'div'> {
  postCount: number;
  savedPostCount: number;
}

const SideBox = ({ postCount, savedPostCount, ...props }: SideBoxProps) => {
  return (
    <div css={S.sideBoxContainer} {...props}>
      <span css={S.sideBoxLabel}>활동 정보</span>
      <div css={S.infoWrapper}>
        <ProfileInfo count={postCount} label="작성한 글" />
        <ProfileInfo count={savedPostCount} label="게시글 저장" />
      </div>
    </div>
  );
};

export default SideBox;
