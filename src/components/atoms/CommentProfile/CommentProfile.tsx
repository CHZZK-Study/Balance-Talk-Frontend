import React from 'react';
import {
  containerStyle,
  profileWrapper,
  profileImage,
} from './CommentProfile.style';

export interface CommentProfileProps {
  option: 'A' | 'B';
  imgUrl?: string;
}

const CommentProfile = ({ option, imgUrl }: CommentProfileProps) => (
  <div css={[containerStyle(option)]}>
    <div css={profileWrapper}>
      <img css={profileImage} src={imgUrl} alt="profile" />
    </div>
  </div>
);

export default CommentProfile;
