import React from 'react';
import { ProfileLabelProps } from '@/types/atoms';
import * as S from './ProfileLabel.style';

const ProfileLabel = ({ nickname }: ProfileLabelProps) => (
  <div css={S.profileLabelContainer}>
    <div css={S.profileBadgeStyling} />
    <span css={S.labelStyling}>{nickname}</span>
  </div>
);

export default ProfileLabel;
