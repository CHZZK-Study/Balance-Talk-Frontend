import React from 'react';
import Rank from '../../../assets/svg/Rank';
import ProfileImage from './ProfileImage/ProfileImage';

import {
  profileContainer,
  profileInfoContainer,
  profileText,
} from './Profile.style';
import defaultProfile from '../../assets/images/defaultProfile.png';
import ProfileInfo from './ProfileInfo';

const Profile = () => {
  return (
    <div css={profileContainer}>
      <ProfileImage src={defaultProfile} size="large" isOutline />
      <ProfileInfo title="가입일: 2024.02.01">
        <p css={profileText}>Username</p>
      </ProfileInfo>
      <div css={profileInfoContainer}>
        <ProfileInfo title="작성한 게시글">
          <p css={profileText}>17</p>
        </ProfileInfo>
        <ProfileInfo title="추천 수">
          <p css={profileText}>9.7k</p>
        </ProfileInfo>
        <ProfileInfo title="등급">
          <Rank />
        </ProfileInfo>
      </div>
    </div>
  );
};

export default Profile;
