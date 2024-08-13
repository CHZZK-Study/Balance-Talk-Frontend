import React from 'react';
import { NormalProfile, LargeProfile } from '@/assets';
import { profileWrapper, profileImage } from './ProfileIcon.style';

interface ProfileProps {
  interaction: 'normal';
  imgUrl?: string;
  size?: 'small' | 'large';
}

interface ProfilePropsWithImage {
  interaction: 'settings';
  imgUrl: string;
  size?: 'small' | 'large';
}

const ProfileIcon = ({
  interaction = 'normal',
  imgUrl,
  size = 'small',
}: ProfileProps | ProfilePropsWithImage) => {
  const profileComponents = {
    normal: {
      small: <NormalProfile />,
      large: <LargeProfile />,
    },
    settings: (
      <div css={profileWrapper(size)}>
        <img css={profileImage} src={imgUrl} alt="profile" />
      </div>
    ),
  };

  return interaction === 'settings'
    ? profileComponents.settings
    : profileComponents.normal[size];
};

export default ProfileIcon;
