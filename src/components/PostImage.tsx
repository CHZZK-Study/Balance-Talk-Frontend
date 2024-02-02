import React from 'react';
import { css } from '@emotion/css';
import { ImageInfo } from '../types/temp';

type PostImageProps = {
  images: ImageInfo[];
  size: SizeType;
};

type SizeStyle = {
  width: string;
  height: string;
  imageWidth: string;
  imageHeight: string;
  fontSize: string;
};

type SizeType = 'large' | 'medium';

const sizeStyles: { [key in SizeType]: SizeStyle } = {
  large: {
    width: '700px',
    height: '350px',
    imageWidth: '300px',
    imageHeight: '300px',
    fontSize: '50px',
  },
  medium: {
    width: '400px',
    height: '200px',
    imageWidth: '170px',
    imageHeight: '170px',
    fontSize: '36px',
  },
};

const PostImage = ({ images, size }: PostImageProps) => {
  return (
    <div
      className={css({
        display: 'flex',
        width: sizeStyles[size].width,
        height: sizeStyles[size].height,
        background: 'rgba(238, 238, 238, .5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
        boxShadow: '0px 4px 4px gray',
      })}
    >
      <img
        className={css({
          width: sizeStyles[size].imageWidth,
          height: sizeStyles[size].imageHeight,
          marginRight: '10px',
          boxShadow: '0px 4px 4px gray',
          borderRadius: '5px',
        })}
        src={images[0].optionImg}
        alt={images[0].optionTitle}
      />
      <span
        className={css({
          fontFamily: 'SpoqaHanSansNeo-Bold',
          fontSize: sizeStyles[size].fontSize,
          position: 'absolute',
          zIndex: 1,
          WebkitTextStroke: '1px white',
          textShadow: '0px 4px 4px gray',
        })}
      >
        vs
      </span>
      <img
        className={css({
          width: sizeStyles[size].imageWidth,
          height: sizeStyles[size].imageHeight,
          marginLeft: '10px',
          boxShadow: '0px 4px 4px gray',
          borderRadius: '5px',
        })}
        src={images[1].optionImg}
        alt={images[1].optionTitle}
      />
    </div>
  );
};

export default PostImage;
