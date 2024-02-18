import { css } from '@emotion/react';
import React from 'react';
import UserProfile from '../../components/UserProfile';
import { Profile, Like, Report, Share, Star } from '../../assets';
import PostCardsSection from './PostCardsSection/PostCardsSection';
import CommentsSection from './CommentsSection/CommentsSection';

const PostPage = () => {
  return (
    <div css={css({ margin: '0.5rem 15%' })}>
      <PostCardsSection />
      <div
        css={css({
          display: 'flex',
          justifyContent: 'space-between',
        })}
      >
        <UserProfile name="balancetalk" img={Profile} joinAt="2024.01.01" />
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
            <Like />
            <Star />
            <Report />
            <Share />
          </div>
        </div>
      </div>
      <CommentsSection />
    </div>
  );
};

export default PostPage;
