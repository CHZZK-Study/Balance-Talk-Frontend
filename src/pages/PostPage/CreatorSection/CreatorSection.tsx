import React from 'react';

import { getFormattedDate } from '@/utils/date';
import ProfileImage from '@/components/common/Profile/ProfileImage/ProfileImage';
import {
  CreatedDateWrapper,
  CreatorSectionWrapper,
  creatorInfoWrapper,
  creatorNameWrapper,
} from './CreatorSection.style';
import defaultProfile from '../../../assets/images/defaultProfile.png';

interface CreatorSectionProps {
  createdBy: string;
  createdAt: string;
  creatorProfileImageUrl: string | null;
}

const CreatorSection = ({
  createdBy,
  createdAt,
  creatorProfileImageUrl,
}: CreatorSectionProps) => {
  return (
    <div css={CreatorSectionWrapper}>
      <div>
        <ProfileImage
          src={creatorProfileImageUrl || defaultProfile}
          size="small"
          isOutline
        />
      </div>
      <div css={creatorInfoWrapper}>
        <div css={creatorNameWrapper} />
        {createdBy || 'nickname'}
        <div css={CreatedDateWrapper}>{getFormattedDate(createdAt)}</div>
      </div>
    </div>
  );
};

export default CreatorSection;
