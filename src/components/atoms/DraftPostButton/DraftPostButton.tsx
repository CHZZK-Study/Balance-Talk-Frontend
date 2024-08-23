import React from 'react';
import { DraftFolder } from '@/assets';
import * as S from './DraftPostButton.style';

const DraftPostButton = () => {
  return (
    <div css={S.ButtonStyle}>
      <DraftFolder css={S.iconStyle} />
      <span css={S.buttonTextStyle}>최근 임시 저장된 게시글 불러오기</span>
    </div>
  );
};
export default DraftPostButton;
