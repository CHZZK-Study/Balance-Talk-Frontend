import React from 'react';
import ProfileIcon, {
  ProfileIconProps,
} from '@/components/atoms/ProfileIcon/ProfileIcon';
import ProfileLabel, {
  ProfileLabelProps,
} from '@/components/atoms/ProfileLabel/ProfileLabel';
import SideBox, { SideBoxProps } from '@/components/molecules/SideBox/SideBox';
import ActionBox from '@/components/molecules/ActionBox/ActionBox';
import * as S from './SideBar.style';

export interface SideBarProps {
  nickname: ProfileLabelProps['nickname'];
  postsCount: SideBoxProps['postsCount'];
  bookmarkedPostsCount: SideBoxProps['bookmarkedPostsCount'];
  profileImageUrl?: ProfileIconProps['imgUrl'];
}

const SideBar = ({
  nickname,
  profileImageUrl,
  postsCount,
  bookmarkedPostsCount,
}: SideBarProps) => {
  const profileIconInteraction = profileImageUrl ? 'settings' : 'normal';

  return (
    <div css={S.sidebarContainer}>
      <div css={S.profileWrapper}>
        <ProfileIcon
          interaction={profileIconInteraction}
          imgUrl={profileImageUrl}
          size="large"
        />
        <div css={S.profileLabelBox}>
          <ProfileLabel nickname={nickname} />
        </div>
        <div css={S.sideWrapper}>
          <SideBox
            postsCount={postsCount}
            bookmarkedPostsCount={bookmarkedPostsCount}
          />
        </div>
      </div>
      <div css={S.actionWrapper}>
        <ActionBox />
      </div>
    </div>
  );
};

export default SideBar;
