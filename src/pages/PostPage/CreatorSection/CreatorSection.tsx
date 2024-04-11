import React, { useState } from 'react';
import { getFormattedDate } from '@/utils/date';
import ProfileImage from '@/components/common/Profile/ProfileImage/ProfileImage';
import ProfileModal from '@/components/common/Modal/ProfileModal/ProfileModal';
import {
  createdDateWrapper,
  creatorSectionWrapper,
  creatorInfoWrapper,
  creatorNameWrapper,
  creatorImageWrapper,
} from './CreatorSection.style';
import defaultProfile from '../../../assets/images/defaultProfile.png';

interface CreatorSectionProps {
  createdBy: string;
  createdAt: string;
  creatorProfileImageUrl: string | null;
  creatorId: number;
}

const CreatorSection = ({
  createdBy,
  createdAt,
  creatorProfileImageUrl,
  creatorId,
}: CreatorSectionProps) => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  return (
    <div css={creatorSectionWrapper}>
      <div
        css={creatorImageWrapper}
        onClick={() => setIsProfileModalOpen(!isProfileModalOpen)}
      >
        <ProfileImage
          src={creatorProfileImageUrl || defaultProfile}
          size="small"
          isOutline
        />
      </div>
      <div css={creatorInfoWrapper}>
        <div css={creatorNameWrapper} />
        {createdBy || 'nickname'}
        <div css={createdDateWrapper}>{getFormattedDate(createdAt)}</div>
      </div>
      {isProfileModalOpen && (
        <ProfileModal
          creatorId={creatorId}
          handleModal={setIsProfileModalOpen}
        />
      )}
    </div>
  );
};

export default CreatorSection;
