import React from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import Label from '../Label/Label';
import {
  profileBadgeStyling,
  profileLabelContainer,
} from './ProfileLabel.style';

export interface ProfileLabelProps extends ComponentPropsWithoutRef<'label'> {
  badgeUrl?: string;
}

const ProfileLabel = ({
  id,
  badgeUrl,
  children,
  ...attributes
}: ProfileLabelProps) => (
  <div css={profileLabelContainer}>
    {badgeUrl ? (
      <img
        src={badgeUrl}
        alt="프로필 뱃지"
        css={profileBadgeStyling(badgeUrl)}
      />
    ) : (
      <div css={profileBadgeStyling()} />
    )}
    <Label id={id} {...attributes}>
      {children}
    </Label>
  </div>
);

export default ProfileLabel;
