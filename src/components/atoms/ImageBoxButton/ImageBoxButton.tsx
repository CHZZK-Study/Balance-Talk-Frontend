import React, { ChangeEvent, KeyboardEvent } from 'react';
import { Camera } from '@/assets';
import * as S from './ImageBoxButton.style';

interface ImageBoxButtonProps {
  imageFile: File | null;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ImageBoxButton = ({ imageFile, onChange }: ImageBoxButtonProps) => {
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      css={S.imageContainer}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      {imageFile ? (
        <img
          src={URL.createObjectURL(imageFile)}
          alt="Uploaded"
          css={S.uploadedImage}
        />
      ) : (
        <div css={S.defaultImageBox}>
          <Camera css={S.iconStyle} />
        </div>
      )}
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={onChange}
        css={S.fileInput}
      />
    </div>
  );
};

export default ImageBoxButton;
