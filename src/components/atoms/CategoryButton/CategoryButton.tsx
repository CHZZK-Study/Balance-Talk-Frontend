import React from 'react';
import type { ComponentPropsWithRef } from 'react';
import { PickVote, RandomGame, TodayPick } from '@/assets';
import * as S from './CategoryButton.style';

export interface CategoryButtonProps extends ComponentPropsWithRef<'button'> {
  imageType: 'PickVote' | 'RandomGame' | 'TodayPick';
  label: string;
}

const CategoryButton = ({
  imageType,
  label,
  ...attributes
}: CategoryButtonProps) => {
  let ImageComponent;
  switch (imageType) {
    case 'PickVote':
      ImageComponent = PickVote;
      break;
    case 'RandomGame':
      ImageComponent = RandomGame;
      break;
    case 'TodayPick':
      ImageComponent = TodayPick;
      break;
    default:
      return null;
  }

  return (
    <button type="button" css={S.categoryButtonBaseStyle} {...attributes}>
      <ImageComponent css={S.imgWrap} />
      <span css={S.labelStyle}>{label}</span>
    </button>
  );
};

export default CategoryButton;
