import { css } from '@emotion/react';
import type { ProfileImageProps } from './ProfileImage';

export const profileImageContainer = css({
  display: 'inline-block',
  borderRadius: '50%',
  overflow: 'hidden',
});

export const profileImageInner = css({
  width: '100%',
  height: '100%',
});

export const getSizeStyling = (size: Required<ProfileImageProps>['size']) => {
  const style = {
    xlarge: css({
      width: '300px',
      height: '300px',
    }),

    large: css({
      width: '200px',
      height: '200px',
    }),

    medium: css({
      width: '100px',
      height: '100px',
    }),

    small: css({
      width: '50px',
      height: '50px',
    }),
  };

  return style[size];
};
