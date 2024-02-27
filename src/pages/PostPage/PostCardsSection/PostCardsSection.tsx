import { css } from '@emotion/react';
import React from 'react';
import TagButton from '../../../components/Buttons/TagButton';
import Eye from '../../../assets/svg/Eye';
import { Hearts } from '../../../assets';
import PostOptionCard from '../../../components/common/PostOptionCard';

const PostCardsSection = () => {
  return (
    <>
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
            <Hearts />
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
    </>
  );
};

export default PostCardsSection;
