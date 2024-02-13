import React from 'react';
import { css } from '@emotion/react';
import LikeIcon from '../assets/svg/LikeIcon';
import StarIcon from '../assets/svg/StarIcon';
import ReportIcon from '../assets/svg/ReportIcon';
import ShareIcon from '../assets/svg/ShareIcon';

const IconList = () => {
  return (
    <div
      css={css({
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
      })}
    >
      <div>
        <LikeIcon />
      </div>
      <div>
        <StarIcon width={24} height={24} />
      </div>
      <div>
        <ReportIcon />
      </div>
      <div>
        <ShareIcon />
      </div>
    </div>
  );
};

export default IconList;
