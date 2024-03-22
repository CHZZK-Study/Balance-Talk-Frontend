import React from 'react';

import { useMemberQuery } from '@/hooks/api/useMemberQuery';
import { useParseJwt } from '@/hooks/common/useParseJwt';
import { useNewSelector } from '@/store';
import { selectAccessToken } from '@/store/auth';
import defaultProfile from '../../../assets/images/defaultProfile.png';
import {
  profileContainer,
  profileInfoContainer,
  profileRankStyling,
  profileText,
} from './Profile.style';
import ProfileImage from './ProfileImage/ProfileImage';
import ProfileInfo from './ProfileInfo';
import { Rank } from '../../../assets';

const Profile = () => {
  const accessToken = useNewSelector(selectAccessToken);
  const { member } = useMemberQuery(useParseJwt(accessToken).memberId);
  if (!member) return null;

  return (
    <div css={profileContainer}>
      <ProfileImage
        src={member.profilePhoto ? member.profilePhoto : defaultProfile}
        size="large"
        isOutline
      />
      <ProfileInfo title="가입일: 2024.02.01">
        <p css={profileText}>{member.nickname}</p>
      </ProfileInfo>
      <div css={profileInfoContainer}>
        <ProfileInfo title="작성한 게시글">
          <p css={profileText}>{member.postsCount}</p>
        </ProfileInfo>
        <ProfileInfo title="추천 수">
          <p css={profileText}>{member.totalPostLike}</p>
        </ProfileInfo>
        <ProfileInfo title="등급">
          <Rank css={profileRankStyling(member.level)} />
        </ProfileInfo>
      </div>
    </div>
  );
};

export default Profile;
