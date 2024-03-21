import React, { SetStateAction } from 'react';
import PostLikeButton from '@/components/Buttons/PostLikeButton';
import { Star, Report } from '../../../assets';
import {
  UserUtilitySectionWrapper,
  UtilityButtonWrapper,
  UtilityButtonsWrapper,
} from './UserUtilitySection.style';

interface UserUtilitySectionProps {
  likesCount: number;
  myLike: boolean;
  myBookmark: boolean;
  postId: number;
  handleLoginModal: React.Dispatch<SetStateAction<boolean>>;
}

const UserUtilitySection = ({
  likesCount,
  myBookmark,
  handleLoginModal,
  myLike,
  postId,
}: UserUtilitySectionProps) => {
  return (
    <div css={UserUtilitySectionWrapper}>
      <div css={UtilityButtonsWrapper}>
        <div css={UtilityButtonWrapper}>
          <PostLikeButton
            handleModal={handleLoginModal}
            postId={postId}
            myLike={myLike}
            likesCount={likesCount}
          />
        </div>
        <div css={UtilityButtonWrapper}>
          <Star />
        </div>
        <div css={UtilityButtonWrapper}>
          <Report />
        </div>
      </div>
    </div>
  );
};

export default UserUtilitySection;
