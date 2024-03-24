import React from 'react';

import { getFormattedDate } from '@/utils/date';
import { Profile } from '../../../assets';
import {
  CreatedDateWrapper,
  CreatorSectionWrapper,
  creatorInfoWrapper,
  creatorNameWrapper,
} from './CreatorSection.style';

interface CreatorSectionProps {
  createdBy: string;
  createdAt: string;
}

const CreatorSection = ({ createdBy, createdAt }: CreatorSectionProps) => {
  return (
    <div css={CreatorSectionWrapper}>
      <div>
        <Profile />
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
