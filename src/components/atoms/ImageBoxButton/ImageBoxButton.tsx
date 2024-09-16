import React, { ChangeEvent } from 'react';
import { Camera } from '@/assets';
import * as S from './ImageBoxButton.style';

interface ImageBoxButtonProps {
  imageFile: File | null;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ImageBoxButton = ({ imageFile, onChange }: ImageBoxButtonProps) => {
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  return (
    <div css={S.imageContainer}>
      {imageFile ? (
        <img
          src={URL.createObjectURL(imageFile)}
          alt="Uploaded"
          css={S.uploadedImage}
        />
      ) : (
        <label htmlFor="file-upload" css={S.defaultImageBox}>
          <Camera css={S.iconStyle} />
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={onChange}
            css={S.fileInput}
          />
        </label>
      )}
    </div>
  );
};

export default ImageBoxButton;
