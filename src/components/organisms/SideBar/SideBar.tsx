import React from 'react';
import ProfileIcon from '@/components/atoms/ProfileIcon/ProfileIcon';
import ProfileLabel from '@/components/atoms/ProfileLabel/ProfileLabel';
import SideBox from '@/components/molecules/SideBox/SideBox';
import ActionBox from '@/components/molecules/ActionBox/ActionBox';
import * as S from './SideBar.style';

interface SideBarProps {
  username: string;
  badgeUrl?: string;
  profileImageUrl?: string;
  postCount: number;
  savedPostCount: number;
}

const SideBar = ({
  username,
  badgeUrl,
  profileImageUrl,
  postCount,
  savedPostCount,
}: SideBarProps) => {
  return (
    <div css={S.sidebarContainer}>
      <div css={S.profileWrapper}>
        <ProfileIcon
          interaction="settings"
          imgUrl={profileImageUrl}
          size="large"
        />
        <div css={S.profileLabelBox}>
          <ProfileLabel badgeUrl={badgeUrl}>{username}</ProfileLabel>
        </div>
        <div css={S.sideWrapper}>
          <SideBox postCount={postCount} savedPostCount={savedPostCount} />
        </div>
      </div>
      <div css={S.actionWrapper}>
        <ActionBox />
      </div>
    </div>
  );
};

export default SideBar;
