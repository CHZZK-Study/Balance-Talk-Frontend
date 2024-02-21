import React from 'react';
import { css } from '@emotion/react';
import Heart from '../assets/svg/Heart';

type HeartButtonProps = {
  isLiked: boolean | undefined;
};

const HeartButton = ({ isLiked }: HeartButtonProps) => {
  return (
    <div
      css={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '19px',
        width: '38px',
        hegiht: '38px',
        cursor: 'pointer',
        ':hover': { backgroundColor: 'pink' },
        transition: 'background-color 0.2s',
      })}
    >
      <Heart isLiked={isLiked} />
    </div>
  );
};

export default HeartButton;
