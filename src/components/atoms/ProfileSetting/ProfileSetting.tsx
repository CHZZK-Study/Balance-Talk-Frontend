import React from 'react';
import { Plus } from '@/assets';
import type { ComponentPropsWithoutRef } from 'react';
import {
  profileImageWrapper,
  profilePlusImageWrapper,
  profilePlusWrapper,
  profileSettingContainer,
  profileSettingInnerContainer,
} from './ProfileSetting.style';

export interface ProfileSettingProps extends ComponentPropsWithoutRef<'img'> {
  isSetting?: boolean;
}

const ProfileSetting = ({
  isSetting = false,
  ...attributes
}: ProfileSettingProps) => {
  return (
    <div css={profileSettingContainer}>
      {isSetting ? (
        <>
          <div css={profileSettingInnerContainer}>
            <img
              alt="프로필 이미지"
              {...attributes}
              css={profileImageWrapper}
            />
          </div>
          <div css={profilePlusWrapper} {...attributes}>
            <Plus />
          </div>
        </>
      ) : (
        <div
          css={[profileSettingInnerContainer, profilePlusImageWrapper]}
          {...attributes}
        >
          <Plus />
        </div>
      )}
    </div>
  );
};

export default ProfileSetting;
