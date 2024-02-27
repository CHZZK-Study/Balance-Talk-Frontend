import React from 'react';
import { css } from '@emotion/react';
import { Profile } from '../../assets';

export interface UserProfileProps {
  name: string;
  img?: string;
  joinAt?: string;
  totalLikeCount?: number;
  level?: string;
}

const UserProfile = ({ name, joinAt }: UserProfileProps) => {
  return (
    <div
      css={css({
        display: 'flex',
        alignItems: 'center',
        gap: '1.3rem',
        padding: '1rem 2rem',
      })}
    >
      <div>
        <Profile />
      </div>
      <div
        css={css({
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        })}
      >
        <div
          css={css({
            fontStyle: 'italic',
            fontFamily: 'SpoqaHanSansNeo-medium',
            fontWeight: '500',
            fontSize: '1rem',
          })}
        >
          {name}
        </div>
        <div
          css={css({
            fontFamily: 'SpoqaHanSansNeo-thin',
            fontSize: '1rem',
          })}
        >
          {joinAt}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
