import React from 'react';
import { css } from '@emotion/react';
import { Hearts, Star, Report, Share } from '../../../assets';

const UserUtilitySection = () => {
  return (
    <div
      css={css({
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
      })}
    >
      <div
        css={css({
          display: 'flex',
          gap: '1rem',
        })}
      >
        <Hearts />
        <Star />
        <Report />
        <Share />
      </div>
    </div>
  );
};

export default UserUtilitySection;
