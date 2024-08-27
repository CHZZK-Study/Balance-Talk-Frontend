import React from 'react';
import { ProfileInfoProps } from '@/types/atoms';
import * as S from './ProfileInfo.style';

const ProfileInfo = ({ count, label, ...attributes }: ProfileInfoProps) => (
  <div css={S.profileInfoContainer} {...attributes}>
    <span css={S.profileNumberStyling}>{count}</span>
    <span css={S.profileLabelStyling}>{label}</span>
  </div>
);

export default ProfileInfo;
