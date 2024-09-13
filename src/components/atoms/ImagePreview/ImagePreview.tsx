import React from 'react';
import { DeleteButton } from '@/assets';
import * as S from './ImagePreview.style';

interface ImagePreviewProps {
  imgUrl: string;
  onDelete: (imgUrl: string) => void;
}

const ImagePreview = ({ imgUrl, onDelete }: ImagePreviewProps) => {
  return (
    <div css={S.previewContainerStyle}>
      <img css={S.previewContainerStyle} src={imgUrl} alt={imgUrl} />
      <button
        css={S.buttonStyle}
        type="button"
        onClick={() => onDelete(imgUrl)}
        aria-label="DeleteIcon"
      >
        <DeleteButton />
      </button>
    </div>
  );
};
export default ImagePreview;
