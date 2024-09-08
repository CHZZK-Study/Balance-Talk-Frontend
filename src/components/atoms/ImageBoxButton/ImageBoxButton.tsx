import React, { useState } from 'react';
import { Camera } from '@/assets';
import * as S from './ImageBoxButton.style';

const ImageBoxButton = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div css={S.imageContainer}>
      {image ? (
        <img src={image} alt="Uploaded" css={S.uploadedImage} />
      ) : (
        <div css={S.defaultImageBox}>
          <Camera css={S.iconStyle} />
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        css={S.fileInput}
      />
    </div>
  );
};

export default ImageBoxButton;
