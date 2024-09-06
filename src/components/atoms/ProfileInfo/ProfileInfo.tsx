import React from 'react';
import * as S from './ProfileInfo.style';

interface ProfileInfoProps extends React.ComponentPropsWithoutRef<'div'> {
  count: number;
  label: string;
}

const ProfileInfo = ({ count, label, ...attributes }: ProfileInfoProps) => (
  <div css={S.profileInfoContainer} {...attributes}>
    <span css={S.profileNumberStyling}>{count}</span>
    <span css={S.profileLabelStyling}>{label}</span>
  </div>
);

export default ProfileInfo;
