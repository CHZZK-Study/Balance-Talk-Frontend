import React from 'react';
import { Plus, PlusCircle } from '@/assets';
import type { ComponentPropsWithoutRef } from 'react';
import {
  profileImageWrapper,
  profilePlusImageWrapper,
  profilePlusWrapper,
  profileSignUpContainer,
  profileSignUpInnerContainer,
} from './ProfileSignUp.style';

export interface ProfileSignUpProps extends ComponentPropsWithoutRef<'img'> {
  isSetting?: boolean;
}

const ProfileSignUp = ({
  isSetting = false,
  ...attributes
}: ProfileSignUpProps) => {
  return (
    <div css={profileSignUpContainer}>
      {isSetting ? (
        <>
          <div css={profileSignUpInnerContainer}>
            <img
              alt="프로필 이미지"
              {...attributes}
              css={profileImageWrapper}
            />
          </div>
          <div css={profilePlusWrapper}>
            <Plus />
          </div>
        </>
      ) : (
        <div
          css={[profileSignUpInnerContainer, profilePlusImageWrapper]}
          {...attributes}
        >
          <Plus />
        </div>
      )}
    </div>
  );
};

export default ProfileSignUp;
