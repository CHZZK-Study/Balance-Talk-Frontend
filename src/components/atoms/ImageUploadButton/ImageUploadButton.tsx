/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef } from 'react';
import { Camera } from '@/assets';
import * as S from './ImageUploadButton.style';

interface ImageUploadButtonProps {
  imageFiles: File[];
  setImageFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

const ImageUploadButton = ({
  imageFiles,
  setImageFiles,
}: ImageUploadButtonProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newImageFiles = Array.from(event.target.files);
      const remainCount = 10 - imageFiles.length;

      const limitedNewFiles = newImageFiles.slice(0, remainCount);
      setImageFiles((prevImageFiles) => [
        ...prevImageFiles,
        ...limitedNewFiles,
      ]);
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div css={S.buttonStyle(imageFiles.length)} onClick={handleButtonClick}>
      <div css={S.contentStyle}>
        <Camera />
        <div css={S.countWrapStyle}>{imageFiles.length}/10</div>
      </div>
      <input
        ref={fileInputRef}
        css={S.inputStyle}
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ImageUploadButton;
