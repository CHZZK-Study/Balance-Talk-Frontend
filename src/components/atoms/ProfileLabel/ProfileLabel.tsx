import React from 'react';
import * as S from './ProfileLabel.style';

export interface ProfileLabelProps {
  nickname: string;
}

const ProfileLabel = ({ nickname }: ProfileLabelProps) => (
  <div css={S.profileLabelContainer}>
    <div css={S.profileBadgeStyling} />
    <span css={S.labelStyling}>{nickname}</span>
  </div>
);

export default ProfileLabel;
