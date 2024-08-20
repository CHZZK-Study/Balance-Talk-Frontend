import React from 'react';
import { Link } from 'react-router-dom';
import CategoryButton from '@/components/atoms/CategoryButton/CategoryButton';
import { categoryBoxStyling } from './CategoryBox.style';

const CategoryBox = () => {
  return (
    <div css={categoryBoxStyling}>
      <Link to="/talkPickPlace">
        <CategoryButton imageType="PickVote" label="톡&픽 플레이스" />
      </Link>
      <CategoryButton imageType="TodayPick" label="오늘의 톡픽 모음.zip" />
      <CategoryButton imageType="RandomGame" label="랜덤 밸런스 게임" />
    </div>
  );
};

export default CategoryBox;
