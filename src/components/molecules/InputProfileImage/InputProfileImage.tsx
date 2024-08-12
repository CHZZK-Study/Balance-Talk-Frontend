import { postFile } from '@/api/file';
import Label from '@/components/atoms/Label/Label';
import ProfileSignUp from '@/components/atoms/ProfileSetting/ProfileSetting';
import color from '@/styles/color';
import { UploadedImage } from '@/types/file';
import { css } from '@emotion/react';
import { useMutation } from '@tanstack/react-query';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import {
  profileDefaultText,
  profileImageSelectContainer,
  profileImageText,
  profileImageTextContainer,
} from './InputProfileImage.style';

interface InputProfileImageProps {
  setProfilePhoto: (name: string, profilePhoto: string) => void;
  imgSrc?: string;
}

const InputProfileImage = ({
  setProfilePhoto,
  imgSrc,
}: InputProfileImageProps) => {
  const [imageSrc, setImageSrc] = useState<string>(imgSrc || '');
  const [isError, setIsError] = useState<boolean>(false);

  const fileUpload = useMutation({
    mutationFn: postFile,
    onSuccess: (res: UploadedImage) => {
      setProfilePhoto('profilePhoto', res.storedName);
    },
  });
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length) {
        const reader = new FileReader();
        reader.readAsDataURL(acceptedFiles[0]);
        reader.onloadend = (e) => {
          setImageSrc(e.target?.result as string);
        };
        setIsError(false);
        const frm = new FormData();
        frm.append('file', acceptedFiles[0], acceptedFiles[0].name);
        fileUpload.mutate(frm);
      } else {
        setIsError(true);
        setProfilePhoto('profilePhoto', '');
      }
    },
    [fileUpload, setProfilePhoto],
  );

  const { getRootProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
    },
    maxSize: 3145728, // 3MB
  });

  const handleDefaultImage = () => {
    setImageSrc('');
  };

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
        <span css={[profileImageText, isError && css({ color: color.RED })]}>
          3MB 이하의 사진만 가능합니다.
        </span>
      </div>
    </div>
  );
};

export default InputProfileImage;
