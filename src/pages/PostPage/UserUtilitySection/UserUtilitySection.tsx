import React from 'react';

import HeartButton from '@/components/Buttons/HeartButton';
import { Hearts, Star, Report, Share } from '../../../assets';
import {
  UserUtilitySectionWrapper,
  UtilityButtonsWrapper,
} from './UserUtilitySection.style';

interface UserUtilitySectionProps {
  likesCount: number;
  myLike: boolean;
  myBookmark: boolean;
}

const UserUtilitySection = ({
  likesCount,
  myBookmark,
  myLike,
}: UserUtilitySectionProps) => {
  return (
    <div css={UserUtilitySectionWrapper}>
      <div css={UtilityButtonsWrapper}>
        <HeartButton isLiked={myLike} />
        <Hearts />
        <Star />
        <Report />
      </div>
    </div>
  );
};

export default UserUtilitySection;
