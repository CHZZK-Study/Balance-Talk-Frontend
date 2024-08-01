import React from 'react';
import {
  containerStyle,
  profileWrapper,
  profileImage,
} from './CommentProfile.style';

export interface CommentProfileProps {
  stance: 'pros' | 'cons';
  imgUrl?: string;
}

const CommentProfile = ({ stance, imgUrl }: CommentProfileProps) => (
  <div css={[containerStyle(stance)]}>
    <div css={profileWrapper}>
      <img css={profileImage} src={imgUrl} alt="profile" />
    </div>
  </div>
);

export default CommentProfile;
