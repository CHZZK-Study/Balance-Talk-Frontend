import React from 'react';
import type { ComponentPropsWithRef } from 'react';
import Chips from '@/components/atoms/Chips/Chips';
import Bookmark from '@/components/atoms/Bookmark/Bookmark';
import * as S from './ContentsButton.style';

export interface ContentsButtonProps extends ComponentPropsWithRef<'div'> {
  imgUrl: string[];
  label: string;
  tagLabels: string[];
  bookmarkState: boolean;
  showBookmark?: boolean;
}

const ContentsButton = ({
  imgUrl,
  label,
  tagLabels,
  bookmarkState = false,
  showBookmark = false,
  ...attributes
}: ContentsButtonProps) => {
  return (
    <div css={S.cardWrapper} {...attributes}>
      <div css={S.imageContainer}>
        {imgUrl.map((url, index) => (
          <div key={index} css={S.imageWrapper}>
            <img src={url} alt={`${label} ${index + 1}`} css={S.image} />
          </div>
        ))}
        <div css={S.chipsContainer}>
          {tagLabels.map((tagLabel) => (
            <Chips key={tagLabel}>{tagLabel}</Chips>
          ))}
        </div>
      </div>
      <div css={S.infoContainer}>
        <span css={S.label}>{label}</span>
        {showBookmark && (
          <Bookmark bookmarkState={bookmarkState} css={S.bookmarkWrapper} />
        )}
      </div>
    </div>
  );
};

export default ContentsButton;
