import React, { SetStateAction } from 'react';
import PostLikeButton from '@/components/Buttons/PostLikeButton';
import PostBookmarkButton from '@/components/Buttons/PostBookmarkButton';
import { utilityBtnsWrapper } from '@/components/common/UserComment/UserComment.style';
import PostReportButton from '@/components/Buttons/PostReportButton';

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
          <PostBookmarkButton
            handleModal={handleLoginModal}
            postId={postId}
            myBookmark={myBookmark}
          />
        </div>
        <div css={utilityBtnsWrapper}>
          <PostReportButton handleModal={handleLoginModal} postId={postId} />
        </div>
      </div>
    </div>
  );
};

export default UserUtilitySection;
