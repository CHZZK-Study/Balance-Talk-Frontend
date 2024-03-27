import React from 'react';
import { ImageInfo } from '../../../types/post';
import {
  SizeType,
  fontWrapper,
  imageTextWrapper,
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
      {images?.[0].imageUrl ? (
        <img
          css={imageWrapper(size)}
          src={images?.[0].imageUrl}
          alt={images?.[0].title}
        />
      ) : (
        <div css={[imageWrapper(size), imageTextWrapper(size)]}>
          {images?.[0].title}
        </div>
      )}
      <span css={fontWrapper(size)}>vs</span>
      {images?.[1].imageUrl ? (
        <img
          css={imageWrapper(size)}
          src={images?.[1].imageUrl}
          alt={images?.[1].title}
        />
      ) : (
        <div css={[imageWrapper(size), imageTextWrapper(size)]}>
          {images?.[1]?.title}
        </div>
      )}
    </div>
  );
};

export default PostImage;
