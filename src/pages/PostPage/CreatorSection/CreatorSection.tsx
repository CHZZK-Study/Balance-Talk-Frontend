import React from 'react';

import { getDate } from '@/utils/date';
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
        <div css={CreatedDateWrapper}>{getDate(createdAt)}</div>
      </div>
    </div>
  );
};

export default CreatorSection;
