import { css } from '@emotion/react';
import React from 'react';
import UserProfile from '../../components/UserProfile';
import { Profile } from '../../assets';
import IconList from '../../components/IconList';
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
        <UserProfile name="balancetalk" img={Profile} />
        <IconList />
      </div>
      <CommentsSection />
    </div>
  );
};

export default PostPage;
