import React, { useState, forwardRef, useEffect } from 'react';
import type { ComponentPropsWithRef, ForwardedRef } from 'react';
import { LikeButtonDF, LikeButtonPR } from '@/assets';
import * as S from './LikeButton.style';

export interface LikeButtonProps extends ComponentPropsWithRef<'button'> {
  initialCount: number;
  initialState?: 'default' | 'press';
}

const LikeButton = (
  { initialCount, initialState = 'default', ...attributes }: LikeButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  const [count, setCount] = useState(initialCount);
  const [isPressed, setIsPressed] = useState(initialState === 'press');

  useEffect(() => {
    setIsPressed(initialState === 'press');
  }, [initialState]);

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
