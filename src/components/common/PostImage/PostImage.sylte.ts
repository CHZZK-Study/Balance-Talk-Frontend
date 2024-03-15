import { css } from '@emotion/react';

export type SizeStyle = {
  width: string;
  height: string;
  imageWidth: string;
  imageHeight: string;
  fontSize: string;
};

export type SizeType = 'large' | 'medium';

export const sizeStyles: { [key in SizeType]: SizeStyle } = {
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
    fontSize: '30px',
  },
};

export const postImageWrapper = (size: SizeType) =>
  css({
    display: 'flex',
    width: sizeStyles[size].width,
    height: sizeStyles[size].height,
    background: 'rgba(238, 238, 238, .5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    boxShadow: '0px 4px 4px gray',
  });

export const imageWrapper = (size: SizeType) =>
  css({
    width: sizeStyles[size].imageWidth,
    height: sizeStyles[size].imageHeight,
    marginRight: '10px',
    boxShadow: '0px 4px 4px gray',
    borderRadius: '5px',
  });

export const fontWrapper = (size: SizeType) =>
  css({
    fontFamily: 'SpoqaHanSansNeo-Bold',
    fontSize: sizeStyles[size].fontSize,
    position: 'absolute',
    zIndex: 1,
    WebkitTextStroke: '1px white',
    textShadow: '0px 4px 4px gray',
  });

export const imageTextWrapper = (size: SizeType) =>
  css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'SpoqaHanSansNeo-Bold',
    fontSize: sizeStyles[size].fontSize,
    textAlign: 'center',
  });
