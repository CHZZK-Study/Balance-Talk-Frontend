import React from 'react';
import { NormalProfile } from '@/assets';
import { profileImage, profileWrapper } from './ProfileIcon.style';

interface ProfileProps {
  interaction: 'normal';
  imgUrl?: string;
}

interface ProfilePropsWithImage {
  interaction: 'settings';
  imgUrl: string;
}

const ProfileIcon = ({
  interaction = 'normal',
  imgUrl,
}: ProfileProps | ProfilePropsWithImage) =>
  interaction === 'normal' ? (
    <NormalProfile />
  ) : (
    <div css={profileWrapper}>
      <img css={profileImage} src={imgUrl} alt="profile" />
    </div>
  );

export default ProfileIcon;
