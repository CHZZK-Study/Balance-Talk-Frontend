import { postFile } from '@/api/file';
import { UploadedImage } from '@/types/post';
import { css } from '@emotion/react';
import { useMutation } from '@tanstack/react-query';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import defaultProfileImage from '../../../../assets/images/defaultProfile.png';
import { Theme } from '../../../styles/theme';
import Button from '../../atoms/Button/Button';
import Label from '../../atoms/Label/Label';
import ProfileImage from '../../common/Profile/ProfileImage/ProfileImage';
import {
  profileImageSelectContainer,
  profileImageText,
} from './InputProfileImage.style';

interface InputProfileImageProps {
  setProfilePhoto: (name: string, profilePhoto: string) => void;
  imgSrc?: string;
}

const InputProfileImage = ({
  setProfilePhoto,
  imgSrc,
}: InputProfileImageProps) => {
  const [imageSrc, setImageSrc] = useState<string>(
    imgSrc || defaultProfileImage,
  );
  const [isError, setIsError] = useState<boolean>(false);

  const fileUpload = useMutation({
    mutationFn: postFile,
    onSuccess: (res: UploadedImage) => {
      setProfilePhoto('profilePhoto', res.storedName);
    },
  });
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      console.log(acceptedFiles[0]);
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

  return (
    <div css={profileImageSelectContainer}>
      <Label>프로필 사진(선택)</Label>
      <ProfileImage size="large" src={imageSrc} />
      <Button size="small" {...getRootProps()}>
        파일 선택
      </Button>
      <span
        css={[profileImageText, isError && css({ color: Theme.color.red })]}
      >
        3MB 이하의 사진만 가능합니다.
      </span>
    </div>
  );
};

export default InputProfileImage;
