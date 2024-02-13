import { css } from '@emotion/react';
import type { ComponentPropsWithRef, ForwardedRef } from 'react';
import React, { forwardRef } from 'react';
import { Theme } from '../../../styles/Theme';
import type { Size } from '../../../types/temp';
import { getSizeStyling, profileImageContainer } from './ProfileImage.style';

export interface ProfileImageProps extends ComponentPropsWithRef<'img'> {
  size?: Extract<Size, 'small' | 'medium' | 'large' | 'xlarge'>;
  isOutline?: boolean;
}

const ProfileImage = (
  { size = 'medium', isOutline = false, ...attributes }: ProfileImageProps,
  ref: ForwardedRef<HTMLImageElement>,
) => {
  return (
    <div
      css={[
        profileImageContainer,
        isOutline &&
          css({
            border: `5px solid ${Theme.color.red}`,
            background:
              'radial-gradiant(circle, #0000ff 0%, #0000ff 20%, #ffffff 100%)',
          }),
      ]}
    >
      <img
        ref={ref}
        alt="프로필 이미지"
        css={[getSizeStyling(size)]}
        {...attributes}
      />
    </div>
  );
};

export default forwardRef(ProfileImage);
