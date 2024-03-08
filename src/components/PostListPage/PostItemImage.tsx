import React from 'react';
import { ImageInfo } from '../../types/post';
import {
  imageContainer,
  imageWrapper,
  versusText,
} from './PostItemImage.style';

type PostImageProps = {
  images: ImageInfo[];
};

const PostItemImage = ({ images }: PostImageProps) => {
  return (
    <div css={imageContainer}>
      <img
        css={imageWrapper}
        src={images[0].optionImg}
        alt={images[0].optionTitle}
      />
      <span css={versusText}>vs</span>
      <img
        css={imageWrapper}
        src={images[1].optionImg}
        alt={images[1].optionTitle}
      />
    </div>
  );
};

export default PostItemImage;
