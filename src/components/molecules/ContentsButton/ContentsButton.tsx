import React, { useState } from 'react';
import type { ComponentPropsWithRef } from 'react';
import Chips from '@/components/atoms/Chips/Chips';
import Bookmark from '@/components/atoms/Bookmark/Bookmark';
import * as S from './ContentsButton.style';

export interface ContentsButtonProps extends ComponentPropsWithRef<'div'> {
  imgUrl: string;
  label: string;
  tagLabel: string;
  initialBookmarkState?: boolean;
}

const ContentsButton = ({
  imgUrl,
  label,
  tagLabel,
  initialBookmarkState = false,
  ...attributes
}: ContentsButtonProps) => {
  const [bookmarkState] = useState(initialBookmarkState);

  return (
    <div css={S.cardWrapper} {...attributes}>
      <div css={S.imageContainer}>
        <img src={imgUrl} alt={label} css={S.image} />
        <div css={S.chipsPosition}>
          <Chips>{tagLabel}</Chips>
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
