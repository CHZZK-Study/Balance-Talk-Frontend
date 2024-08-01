import React, { useState, forwardRef, useEffect } from 'react';
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
  const [count, setCount] = useState(likeCount);
  const [isPressed, setIsPressed] = useState(likeState);

  useEffect(() => {
    setCount(likeCount);
  }, [likeCount]);

  useEffect(() => {
    setIsPressed(likeState);
  }, [likeState]);

  const handleClick = () => {
    if (isPressed) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
    setIsPressed(!isPressed);
  };

  return (
    <button
      type="button"
      ref={ref}
      css={S.likeButton}
      onClick={handleClick}
      {...attributes}
    >
      {isPressed ? (
        <LikeButtonPR css={S.icon} />
      ) : (
        <LikeButtonDF css={S.icon} />
      )}
      <span css={[S.defaultLabel, isPressed && S.pressedLabel]}>{count}</span>
    </button>
  );
};

export default forwardRef(LikeButton);
