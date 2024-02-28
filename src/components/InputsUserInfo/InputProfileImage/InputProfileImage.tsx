import { css } from '@emotion/react';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import defaultProfileImage from '../../../assets/images/defaultProfile.png';
import { Theme } from '../../../styles/Theme';
import Button from '../../design/Button/Button';
import Label from '../../design/Label/Label';
import ProfileImage from '../../Profile/ProfileImage/ProfileImage';
import {
  profileImageSelectContainer,
  profileImageText,
} from './InputProfileImage.style';

const InputProfileImage = () => {
  const [imageSrc, setImageSrc] = useState<string>(defaultProfileImage);
  const [isError, setIsError] = useState<boolean>(false);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length) {
      const reader = new FileReader();
      reader.readAsDataURL(acceptedFiles[0]);
      reader.onloadend = (e) => {
        setImageSrc(e.target?.result as string);
      };
      setIsError(false);
    } else {
      setIsError(true);
    }
  }, []);

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
