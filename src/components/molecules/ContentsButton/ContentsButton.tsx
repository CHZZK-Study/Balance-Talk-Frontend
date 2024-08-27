import React from 'react';
import type { ContentsButtonProps } from '@/types/molecules';
import Chips from '@/components/atoms/Chips/Chips';
import Bookmark from '@/components/atoms/Bookmark/Bookmark';
import * as S from './ContentsButton.style';

const ContentsButton = ({
  optionAImg,
  optionBImg,
  title,
  tagLabels,
  bookmarkState = false,
  showBookmark = false,
  ...attributes
}: ContentsButtonProps) => {
  return (
    <div css={S.cardWrapper} {...attributes}>
      <div css={S.imageContainer}>
        <div css={S.imageWrapper}>
          <img src={optionAImg} alt="option A" css={S.image} />
        </div>
        <div css={S.imageWrapper}>
          <img src={optionBImg} alt="option B" css={S.image} />
        </div>
        <div css={S.chipsContainer}>
          {tagLabels.map((tagLabel) => (
            <Chips key={tagLabel}>{tagLabel}</Chips>
          ))}
        </div>
      </div>
      <div css={S.infoContainer}>
        <span css={S.label}>{title}</span>
        {showBookmark && (
          <Bookmark bookmarkState={bookmarkState} css={S.bookmarkWrapper} />
        )}
      </div>
    </div>
  );
};

export default ContentsButton;
