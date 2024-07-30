import React from 'react';
import type { ComponentPropsWithRef } from 'react';
import Tag from '@/components/atoms/Tag/Tag';
import Bookmark from '@/components/atoms/Bookmark/Bookmark';
import * as S from './ContentsButton.style';

export interface ContentsButtonProps extends ComponentPropsWithRef<'div'> {
  imgUrl: string;
  label: string;
  tagLabel: string;
  bookmarkState: 'default' | 'press';
}

const ContentsButton = ({
  imgUrl,
  label,
  tagLabel,
  bookmarkState,
  ...attributes
}: ContentsButtonProps) => {
  return (
    <div css={S.cardWrapper} {...attributes}>
      <div css={S.imageContainer}>
        <img src={imgUrl} alt={label} css={S.image} />
        <Tag label={tagLabel} css={S.tag} />
      </div>
      <div css={S.infoContainer}>
        <span css={S.label}>{label}</span>
        <Bookmark state={bookmarkState} />
      </div>
    </div>
  );
};

export default ContentsButton;
