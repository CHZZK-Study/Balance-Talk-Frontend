import React from 'react';
import { css } from '@emotion/react';

const PostOptionCard = () => {
  return (
    <div
      css={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '450px',
        gap: '1rem',
      })}
    >
      <div
        css={css({
          fontFamily: 'SpoqaHanSansNeo-Medium',
          fontSize: '2rem',
        })}
      >
        커피
      </div>
      <div>
        <img
          css={css({
            backgroundColor: '#ADADAD',
            fontFamily: 'SpoqaHanSansNeo-Medium',
            textAlign: 'center',
            fontSize: '2rem',
          })}
          src=""
          width="400px"
          height="350px"
          alt=""
        />
      </div>
      <div
        css={css({
          backgroundColor: '#D9D9D9',
          fontFamily: 'SpoqaHanSansNeo-Bold',
          fontSize: '1.5rem',
          borderRadius: '1rem',
          padding: '1.5rem 1rem',
          width: '400px',
          textAlign: 'center',
        })}
      >
        남녀노소 누구나 좋아하는 커피
      </div>
    </div>
  );
};

export default PostOptionCard;
