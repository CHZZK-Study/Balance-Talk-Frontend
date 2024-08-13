import React from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import {
  profileInfoContainer,
  profileNumberStyling,
  profileLabelStyling,
} from './ProfileInfo.style';

export interface ProfileInfoProps extends ComponentPropsWithoutRef<'div'> {
  number: number | string;
  label: string;
}

const ProfileInfo = ({ number, label, ...attributes }: ProfileInfoProps) => (
  <div css={profileInfoContainer} {...attributes}>
    <span css={profileNumberStyling}>{number}</span>
    <span css={profileLabelStyling}>{label}</span>
  </div>
);

export default ProfileInfo;
