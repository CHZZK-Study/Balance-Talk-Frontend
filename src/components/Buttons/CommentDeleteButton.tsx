import React, { useState, SetStateAction } from 'react';
import { css } from '@emotion/react';
import { Delete } from '@/assets';
import { pulsate } from '../../styles/keyframes';

interface CommentDeleteButtonProps {
  handleModal: React.Dispatch<SetStateAction<boolean>>;
}
const CommentDeleteButton = ({ handleModal }: CommentDeleteButtonProps) => {
  const [isAnimation, setIsAnimation] = useState(false);

  const animationTrigger = () => {
    setIsAnimation(true);
    setTimeout(() => setIsAnimation(false), 200);
  };

  const handleDeleteComment = () => {
    animationTrigger();
    handleModal(true);
  };

  return (
    <div
      css={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '2px',
        width: '38px',
        height: '38px',
        cursor: 'pointer',
        ':hover': { '& svg path': { stroke: '#ADADAD' } },
      })}
      onClick={handleDeleteComment}
      role="presentation"
    >
      <Delete
        css={css({
          fill: 'none',
          animation: `${isAnimation ? `${pulsate} .5s ease-in-out` : 'none'}`,
        })}
      />
    </div>
  );
};

export default CommentDeleteButton;
