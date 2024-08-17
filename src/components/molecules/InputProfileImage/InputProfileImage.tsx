import React from 'react';
import Label from '@/components/atoms/Label/Label';
import ProfileSignUp from '@/components/atoms/ProfileSetting/ProfileSetting';
import {
  InputProfileImageProps,
  useCheckProfileImage,
} from '@/hooks/common/inputsUserInfo/useCheckProfileImage';
import {
  profileDefaultText,
  profileImageSelectContainer,
  profileImageText,
  profileImageTextContainer,
} from './InputProfileImage.style';

const InputProfileImage = ({
  setProfilePhoto,
  imgSrc,
}: InputProfileImageProps) => {
  const { imageSrc, isError, getRootProps, handleDefaultImage } =
    useCheckProfileImage({ setProfilePhoto, imgSrc });
  return (
    <div css={profileImageSelectContainer}>
      <Label>프로필 사진(선택)</Label>
      <ProfileSignUp
        isSetting={!!imageSrc}
        src={imageSrc}
        {...getRootProps()}
      />
      <div css={profileImageTextContainer}>
        <button
          type="button"
          css={profileDefaultText}
          onClick={handleDefaultImage}
        >
          기본 이미지로 프로필 설정하기
        </button>
        <span css={profileImageText(isError)}>
          3MB 이하의 사진만 가능합니다.
        </span>
      </div>
    </div>
  );
};

export default InputProfileImage;
