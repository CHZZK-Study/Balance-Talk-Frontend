/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef } from 'react';
import { Camera } from '@/assets';
import * as S from './ImageUploadButton.style';

interface ImageUploadButtonProps {
  imageCount: number;
  setImageFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

const ImageUploadButton = ({
  imageCount,
  setImageFiles,
}: ImageUploadButtonProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newImageFiles = Array.from(event.target.files);
      const remainCount = 10 - imageCount;

      const limitedNewFiles = newImageFiles.slice(0, remainCount);
      setImageFiles((prevImageFiles) => [
        ...prevImageFiles,
        ...limitedNewFiles,
      ]);
    }
  };

  const handleButtonClick = () => {
    if (imageCount === 10) return;

    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <button
      type="button"
      css={S.buttonStyle(imageCount)}
      onClick={handleButtonClick}
    >
      <div css={S.contentStyle}>
        <Camera />
        <div css={S.countWrapStyle}>{imageCount}/10</div>
      </div>
      <input
        ref={fileInputRef}
        css={S.inputStyle}
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />
    </button>
  );
};

export default ImageUploadButton;
