import React, { forwardRef } from 'react';
import type { ComponentPropsWithRef, ForwardedRef } from 'react';
import { LikeButtonDF, LikeButtonPR } from '@/assets';
import * as S from './LikeButton.style';

export interface LikeButtonProps extends ComponentPropsWithRef<'button'> {
  likeCount: number;
  likeState?: boolean;
}

const LikeButton = (
  { likeCount, likeState = false, ...attributes }: LikeButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  return (
    <button type="button" ref={ref} css={S.likeButton} {...attributes}>
      {likeState ? (
        <LikeButtonPR css={S.icon} />
      ) : (
        <LikeButtonDF css={S.icon} />
      )}
      <span css={[S.defaultLabel, likeState && S.pressedLabel]}>
        {likeCount}
      </span>
    </button>
  );
};

export default forwardRef(LikeButton);
