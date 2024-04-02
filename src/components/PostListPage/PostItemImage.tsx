import React from 'react';
import { ImageInfo } from '../../types/post';
import {
  imageContainer,
  imageTextWrapper,
  imageWrapper,
  versusText,
} from './PostItemImage.style';

type PostImageProps = {
  images: ImageInfo[];
};

const PostItemImage = ({ images }: PostImageProps) => {
  return (
    <div css={imageContainer}>
      {images?.[0].imageUrl ? (
        <img
          css={imageWrapper}
          src={images?.[0].imageUrl}
          alt={images?.[0].title}
        />
      ) : (
        <div css={[imageWrapper, imageTextWrapper]}>
          {images?.[0].title.length > 7
            ? `${images?.[0]?.title.slice(0, 6)}...`
            : images?.[0]?.title ?? ''}
        </div>
      )}
      <span css={versusText}>vs</span>
      {images?.[1].imageUrl ? (
        <img
          css={imageWrapper}
          src={images?.[1].imageUrl}
          alt={images?.[1].title}
        />
      ) : (
        <div css={[imageWrapper, imageTextWrapper]}>
          {images?.[1].title.length > 7
            ? `${images?.[1]?.title.slice(0, 6)}...`
            : images?.[1]?.title ?? ''}
        </div>
      )}
      {/* <img
        css={imageWrapper}
        src={images[0].optionImg}
        alt={images[0].optionTitle}
      />
      <span css={versusText}>vs</span>
      <img
        css={imageWrapper}
        src={images[1].optionImg}
        alt={images[1].optionTitle}
      /> */}
    </div>
  );
};

export default PostItemImage;
