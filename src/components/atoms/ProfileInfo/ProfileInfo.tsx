import React from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import {
  profileInfoContainer,
  profileNumberStyling,
  profileLabelStyling,
} from './ProfileInfo.style';

export interface ProfileInfoProps extends ComponentPropsWithoutRef<'div'> {
  count: number;
  label: string;
}

const ProfileInfo = ({ count, label, ...attributes }: ProfileInfoProps) => (
  <div css={profileInfoContainer} {...attributes}>
    <span css={profileNumberStyling}>{count}</span>
    <span css={profileLabelStyling}>{label}</span>
  </div>
);

export default ProfileInfo;
