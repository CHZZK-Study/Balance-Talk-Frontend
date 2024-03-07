import React from 'react';
import { ImageInfo } from '../../../types/post';
import {
  SizeType,
  fontWrapper,
  imageWrapper,
  postImageWrapper,
} from './PostImage.sylte';

type PostImageProps = {
  images?: ImageInfo[];
  size: SizeType;
};

const PostImage = ({ images, size }: PostImageProps) => {
  return (
    <div css={postImageWrapper(size)}>
      <img
        css={imageWrapper(size)}
        src={images?.[0].optionImg}
        alt={images?.[0].optionTitle}
      />
      <span css={fontWrapper(size)}>vs</span>
      <img
        css={imageWrapper(size)}
        src={images?.[1].optionImg}
        alt={images?.[1].optionTitle}
      />
    </div>
  );
};

export default PostImage;
