import React, { useState } from 'react';
import type { ComponentPropsWithRef } from 'react';
import { LikeButtonDF, LikeButtonPR } from '@/assets';
import * as S from './LikeButton.style';
import { defaultLabel } from './LikeButton.style';

export interface LikeButtonProps extends ComponentPropsWithRef<'button'> {
  initialCount: number;
}

const LikeButton = ({ initialCount, ...attributes }: LikeButtonProps) => {
  const [count, setCount] = useState(initialCount);
  const [isPressed, setIsPressed] = useState(false);

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

export default LikeButton;
