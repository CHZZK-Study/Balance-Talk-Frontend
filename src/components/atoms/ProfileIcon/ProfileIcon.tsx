import React from 'react';
import { NormalProfile } from '@/assets';
import { profileWrapper, profileImage } from './ProfileIcon.style';

interface ProfileProps {
  interaction: 'normal';
  imgUrl?: string;
  size?: 'small' | 'large';
}

interface ProfilePropsWithImage {
  interaction: 'settings';
  imgUrl?: string;
  size?: 'small' | 'large';
}

export type ProfileIconProps = ProfileProps | ProfilePropsWithImage;

const ProfileIcon = ({
  interaction = 'normal',
  imgUrl,
  size = 'small',
}: ProfileIconProps) => {
  const profileComponents = {
    normal: (
      <div css={profileWrapper(size)}>
        <NormalProfile css={profileImage} />
      </div>
    ),
    settings: (
      <div css={profileWrapper(size)}>
        <img css={profileImage} src={imgUrl} alt="profile" />
      </div>
    ),
  };

  return interaction === 'settings'
    ? profileComponents.settings
    : profileComponents.normal;
};

export default ProfileIcon;
