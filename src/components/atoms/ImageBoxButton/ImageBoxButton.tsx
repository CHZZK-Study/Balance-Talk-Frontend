import React, { useState, useRef } from 'react';
import { Camera } from '@/assets';
import { FileUploadType } from '@/types/file';
import { useFileUploadMutation } from '@/hooks/api/file/useFileUploadMutation';
import * as S from './ImageBoxButton.style';

const ImageBoxButton = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { mutate } = useFileUploadMutation();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      mutate(
        { formData, params: { type: 'GAME' } as FileUploadType },
        {
          onSuccess: (response) => {
            if (response.imgUrls && response.imgUrls.length > 0) {
              setImageUrl(response.imgUrls[0]);
            }
          },
          onError: (error) => {
            console.error('이미지 업로드 중 오류 발생:', error);
          },
        },
      );
    }
  };

  return (
    <div css={S.imageContainer}>
      {imageUrl ? (
        <img src={imageUrl} alt="Uploaded" css={S.uploadedImage} />
      ) : (
        <label css={S.defaultImageBox} htmlFor="file-upload">
          <Camera css={S.iconStyle} />
          {}
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={handleImageUpload}
            css={S.fileInput}
          />
        </label>
      )}
    </div>
  );
};

export default ImageBoxButton;
