import React from 'react';
import { css } from '@emotion/react';
import { ImageInfo } from '../../../types/post';

type PostImageProps = {
  images: ImageInfo[];
};

const PostItemImage = ({ images }: PostImageProps) => {
  return (
    <div
      css={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      })}
    >
      <img
        css={css({
          width: '200px',
          height: '200px',
          marginRight: '10px',
          boxShadow: '0px 4px 4px gray',
          borderRadius: '5px',
        })}
        src={images[0].optionImg}
        alt={images[0].optionTitle}
      />
      <span
        css={css({
          fontFamily: 'SpoqaHanSansNeo-Bold',
          fontSize: '48px',
          position: 'absolute',
          zIndex: 1,
          WebkitTextStroke: '1px white',
          textShadow: '0px 4px 4px gray',
        })}
      >
        vs
      </span>
      <img
        css={css({
          width: '200px',
          height: '200px',
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

export default PostItemImage;
