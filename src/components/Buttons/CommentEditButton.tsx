import React, { SetStateAction, useState } from 'react';
import { css } from '@emotion/react';
import { Edit } from '@/assets';
import { pulsate } from '../../styles/keyframes';

type CommentEditButtonProps = {
  handleActiveEdit: React.Dispatch<SetStateAction<boolean>>;
};

const CommentEditButton = ({ handleActiveEdit }: CommentEditButtonProps) => {
  const [isAnimation, setIsAnimation] = useState(false);

  const animationTrigger = () => {
    setIsAnimation(true);
    setTimeout(() => setIsAnimation(false), 200);
  };

  const handleActiveEditInput = () => {
    animationTrigger();
    handleActiveEdit((prev) => !prev);
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
      onClick={handleActiveEditInput}
      role="presentation"
    >
      <Edit
        css={css({
          fill: 'none',
          animation: `${isAnimation ? `${pulsate} .5s ease-in-out` : 'none'}`,
        })}
      />
    </div>
  );
};

export default CommentEditButton;
