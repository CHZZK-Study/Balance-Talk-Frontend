import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ImageInfo } from '../../../types/post';
import {
  SizeType,
  fontWrapper,
  imageTextWrapper,
  imageWrapper,
  postImageWrapper,
} from './PostImage.sylte';

type PostImageProps = {
  images: ImageInfo[];
  size: SizeType;
  postId?: number;
};

const PostImage = ({ images, size, postId }: PostImageProps) => {
  const navigate = useNavigate();

  return (
    <div
      css={postImageWrapper(size)}
      onClick={() => navigate(`/posts/${postId}`)}
      role="presentation"
    >
      {images?.[0].imageUrl ? (
        <img
          css={imageWrapper(size)}
          src={images?.[0].imageUrl}
          alt={images?.[0].title}
        />
      ) : (
        <div css={[imageWrapper(size), imageTextWrapper(size)]}>
          {images?.[0].title.length > 7
            ? `${images?.[0]?.title.slice(0, 7)}...`
            : images?.[0]?.title ?? ''}
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
          {images?.[1].title.length > 7
            ? `${images?.[1]?.title.slice(0, 6)}...`
            : images?.[1]?.title ?? ''}
        </div>
      )}
    </div>
  );
};

export default PostImage;
