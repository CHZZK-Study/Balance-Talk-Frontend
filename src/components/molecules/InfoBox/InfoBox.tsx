import React from 'react';
import InfoLabel from '@/components/atoms/InfoLabel/InfoLabel';
import { InfoBoxProps } from '@/types/molecules';
import * as S from './InfoBox.style';

const InfoBox = ({
  title,
  prefix,
  commentContent,
  commentCount,
  bookmarks,
}: InfoBoxProps) => {
  return (
    <div css={S.infoContainer}>
      <div css={S.textContainer}>
        <p css={S.titleLabel}>{title}</p>
        <p css={S.subtitleWrapper}>
          <span css={S.prefixLabel}>{prefix}</span>
          <span css={S.subtitleLabel}>{commentContent}</span>
        </p>
      </div>
      <InfoLabel label="톡댓톡" count={commentCount} />
      <InfoLabel label="저장" count={bookmarks} />
    </div>
  );
};

export default InfoBox;
