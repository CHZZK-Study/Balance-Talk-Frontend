import React from 'react';
import { Link } from 'react-router-dom';
import CategoryButton from '@/components/atoms/CategoryButton/CategoryButton';
import { categoryBoxStyling } from './CategoryBox.style';

const CategoryBox = () => {
  return (
    <div css={categoryBoxStyling}>
      <Link to="/talkPickPlace">
        <CategoryButton imageType="TodayPick" label="오늘의 톡픽 모음.zip" />
      </Link>
      <CategoryButton imageType="PickVote" label="낼톡픽 투표하기" />
      <CategoryButton imageType="RandomGame" label="랜덤 밸런스 게임" />
    </div>
  );
};

export default CategoryBox;
