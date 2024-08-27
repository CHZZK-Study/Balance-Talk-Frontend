import React from 'react';
import ProfileIcon from '@/components/atoms/ProfileIcon/ProfileIcon';
import ProfileLabel from '@/components/atoms/ProfileLabel/ProfileLabel';
import SideBox from '@/components/molecules/SideBox/SideBox';
import ActionBox from '@/components/molecules/ActionBox/ActionBox';
import { SideBarProps } from '@/types/organisms';
import * as S from './SideBar.style';

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
