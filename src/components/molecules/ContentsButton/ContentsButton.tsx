import React from 'react';
import type { ComponentPropsWithRef } from 'react';
import Chips from '@/components/atoms/Chips/Chips';
import Bookmark from '@/components/atoms/Bookmark/Bookmark';
import * as S from './ContentsButton.style';

export interface ContentsButtonProps extends ComponentPropsWithRef<'div'> {
  imgUrl: string;
  label: string;
  tagLabels: string[];
  bookmarkState?: boolean;
}

const ContentsButton = ({
  imgUrl,
  label,
  tagLabels,
  bookmarkState = false,
  ...attributes
}: ContentsButtonProps) => {
  return (
    <div css={S.cardWrapper} {...attributes}>
      <div css={S.imageContainer}>
        <img src={imgUrl} alt={label} css={S.image} />
        <div css={S.chipsContainer}>
          {tagLabels.map((tagLabel) => (
            <Chips key={tagLabel}>{tagLabel}</Chips>
          ))}
        </div>
      </div>
      <div css={S.infoContainer}>
        <span css={S.label}>{label}</span>
        <Bookmark bookmarkState={bookmarkState} />
      </div>
    </div>
  );
};

export default ContentsButton;
