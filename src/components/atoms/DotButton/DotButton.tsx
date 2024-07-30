import React, { useState } from 'react';
import type { ComponentPropsWithRef } from 'react';
import { Dot } from '@/assets';
import * as S from './DotButton.style';

const DotButton = ({ ...attributes }: ComponentPropsWithRef<'button'>) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div css={S.container}>
      <button
        type="button"
        css={S.dotButton}
        onClick={handleClick}
        {...attributes}
      >
        <Dot css={S.icon} />
      </button>
      {isOpen && (
        <div css={S.menu}>
          <button type="button" css={S.menuItem}>
            수정
          </button>
          <button type="button" css={S.menuItem}>
            삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default DotButton;
