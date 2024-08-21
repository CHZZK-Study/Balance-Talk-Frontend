import React from 'react';
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

  return (
    <div css={S.buttonStyle(imageFiles.length)}>
      <div css={S.contentStyle}>
        <Camera />
        <div css={S.countWrapStyle}>{imageFiles.length}/10</div>
      </div>
      <input
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
