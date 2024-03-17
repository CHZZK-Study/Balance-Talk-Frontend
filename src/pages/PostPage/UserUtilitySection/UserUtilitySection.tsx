import React from 'react';

import { Hearts, Star, Report, Share } from '../../../assets';
import {
  UserUtilitySectionWrapper,
  UtilityButtonsWrapper,
} from './UserUtilitySection.style';

const UserUtilitySection = () => {
  return (
    <div css={UserUtilitySectionWrapper}>
      <div css={UtilityButtonsWrapper}>
        <Hearts />
        <Star />
        <Report />
        <Share />
      </div>
    </div>
  );
};

export default UserUtilitySection;
