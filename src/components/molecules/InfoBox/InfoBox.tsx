import React from 'react';
import InfoLabel from '@/components/atoms/InfoLabel/InfoLabel';
import * as S from './InfoBox.style';

interface InfoBoxProps {
  title: string;
  prefix: string;
  subtitle: string;
  commentCount: number;
  saveCount: number;
}

const InfoBox = ({
  title,
  prefix,
  subtitle,
  commentCount,
  saveCount,
}: InfoBoxProps) => {
  return (
    <div css={S.infoContainer}>
      <div css={S.textContainer}>
        <p css={S.titleLabel}>{title}</p>
        <p css={S.subtitleWrapper}>
          <span css={S.prefixLabel}>{prefix}</span>
          <span css={S.subtitleLabel}>{subtitle}</span>
        </p>
      </div>
      <InfoLabel label="톡댓톡" count={commentCount} />
      <InfoLabel label="저장" count={saveCount} />
    </div>
  );
};

export default InfoBox;
