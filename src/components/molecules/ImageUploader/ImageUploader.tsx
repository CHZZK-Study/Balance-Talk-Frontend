/* eslint-disable react/no-array-index-key */
import React, { useRef, useState, useEffect, useCallback } from 'react';
import ImageUploadButton from '@/components/atoms/ImageUploadButton/ImageUploadButton';
import ImagePreview from '@/components/atoms/ImagePreview/ImagePreview';
import { RightArrowButton, LeftArrowButton } from '@/assets';
import * as S from './ImageUploader.style';

interface ImageUploaderProps {
  imageFiles: File[];
  setImageFiles: React.Dispatch<React.SetStateAction<File[]>>;
  imgUrls: string[];
  setImgUrls: React.Dispatch<React.SetStateAction<string[]>>;
  setStoredNames: React.Dispatch<React.SetStateAction<string[]>>;
  isTempLoaded: boolean;
}

const ImageUploader = ({
  imageFiles,
  setImageFiles,
  imgUrls,
  setImgUrls,
  setStoredNames,
  isTempLoaded,
}: ImageUploaderProps) => {
  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const handleDelete = (index: number) => {
    if (isTempLoaded) {
      setImgUrls((prevUrls) => prevUrls.filter((_, i) => i !== index));
      setStoredNames((prevNames) => prevNames.filter((_, i) => i !== index));
    } else {
      setImageFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    }
  };

  const scrollToRight = (): void => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const scrollToLeft = (): void => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const checkScrollPosition = useCallback((): void => {
    if (imageContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        imageContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);

      setCanScrollRight(
        imageFiles.length > 0 && scrollLeft < scrollWidth - clientWidth,
      );
    }
  }, [imageFiles]);

  useEffect(() => {
    const container = imageContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
    }

    checkScrollPosition();

    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, [imageFiles, checkScrollPosition]);

  return (
    <div css={S.uploaderContainerStyle}>
      <div css={S.imageContainerStyle} ref={imageContainerRef}>
        <ImageUploadButton
          imageFiles={imageFiles}
          setImageFiles={setImageFiles}
        />

        {isTempLoaded
          ? imgUrls.map((url, index) => (
              <ImagePreview
                key={index}
                imgUrl={url}
                onDelete={() => handleDelete(index)}
              />
            ))
          : imageFiles.map((imageFile, index) => (
              <ImagePreview
                key={index}
                imgUrl={URL.createObjectURL(imageFile)}
                onDelete={() => handleDelete(index)}
              />
            ))}
      </div>

      {canScrollLeft && (
        <button
          type="button"
          css={S.arrowButtonStyle('left')}
          onClick={scrollToLeft}
          aria-label="Scroll left"
        >
          <LeftArrowButton />
        </button>
      )}

      {canScrollRight && (
        <button
          type="button"
          aria-label="Scroll right"
          css={S.arrowButtonStyle('right')}
          onClick={scrollToRight}
        >
          <RightArrowButton />
        </button>
      )}
    </div>
  );
};

export default ImageUploader;
