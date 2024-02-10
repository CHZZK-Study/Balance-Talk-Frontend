import { css } from '@emotion/react';
import React from 'react';
import TagButton from '../../components/TagButton';
import Eye from '../../assets/svg/Eye';
import Heart from '../../assets/svg/Heart';
import PostOptionCard from '../../components/PostOptionCard';
import UserProfile from '../../components/UserProfile';
import IconList from '../../components/IconList';
import UserComment from '../../components/UserComment';
import CommentSection from '../../components/CommentSection';

const PostPage = () => {
  return (
    <div css={css({ margin: '0.5rem 15%' })}>
      <div
        css={css({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0.5rem 1rem',
        })}
      >
        <div
          css={css({
            display: 'flex',
            padding: '0.5rem',
            gap: '2rem',
          })}
        >
          <div
            css={css({
              fontFamily: 'SpoqaHanSansNeo-medium',
              fontSize: '3rem',
            })}
          >
            카페 주문
          </div>
          <div
            css={css({
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            })}
          >
            <TagButton tag="태그" />
            <TagButton tag="태그" />
          </div>
        </div>
        <div
          css={css({
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            fontFamily: 'SpoqaHanSansNeo-Regular',
            fontSize: '1.5rem',
          })}
        >
          <div
            css={css({
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            })}
          >
            <Eye />
            <span>100</span>
          </div>
          <div
            css={css({
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            })}
          >
            <Heart />
            100
          </div>
        </div>
      </div>

      <div
        css={css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1rem',
          backgroundColor: '#EEEEEE',
        })}
      >
        <PostOptionCard />
        <div
          css={css({
            fontFamily: 'SpoqaHanSansNeo-medium',
            fontSize: '3rem',
          })}
        >
          VS
        </div>
        <PostOptionCard />
      </div>
      <div
        css={css({
          display: 'flex',
          justifyContent: 'space-between',
        })}
      >
        <UserProfile />
        <IconList />
      </div>

      <div
        css={css({
          display: 'flex',
          flexDirection: 'column',
        })}
      >
        <div
          css={css({
            marginTop: '1rem',
            marginBottom: '3rem',
            fontFamily: 'SpoqaHanSansNeo-regular',
            fontSize: '1.5rem',
          })}
        >
          댓글 40개
        </div>
        <div
          css={css({
            display: 'flex',
            justifyContent: 'space-between',
          })}
        >
          <CommentSection title="커피" color="EEEEEE" />
          <CommentSection title="쥬스" />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
