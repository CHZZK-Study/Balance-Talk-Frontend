import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { css } from '@emotion/react';
import { Profile } from '../../assets';
import { fetchMember } from '../../api/member/member';

interface CreatorSectionProps {
  creatorId: number;
}

const CreatorSection = ({ creatorId }: CreatorSectionProps) => {
  const { data: member } = useQuery({
    queryKey: ['member', creatorId],
    queryFn: () => fetchMember(creatorId),
  });

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
        {member?.profilePhoto === '../' ? (
          <Profile />
        ) : (
          <img src={member?.profilePhoto} alt="Profile" />
        )}
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
        />
        {member?.nickname || 'nickname'}
        <div
          css={css({
            fontFamily: 'SpoqaHanSansNeo-thin',
            fontSize: '1rem',
          })}
        >
          {member?.createdAt}
        </div>
      </div>
    </div>
  );
};

export default CreatorSection;
