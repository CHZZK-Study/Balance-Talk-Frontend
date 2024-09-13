import React from 'react';
import { DraftFolder } from '@/assets';
import * as S from './DraftPostButton.style';

interface DraftPostButtonProps {
  onClick: () => void;
}

const DraftPostButton = ({ onClick }: DraftPostButtonProps) => {
  return (
    <button type="button" css={S.ButtonStyle} onClick={onClick}>
      <DraftFolder css={S.iconStyle} />
      <span css={S.buttonTextStyle}>최근 임시 저장된 게시글 불러오기</span>
    </button>
  );
};

export default DraftPostButton;
