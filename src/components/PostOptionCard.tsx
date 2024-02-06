import React from 'react';
import { css } from '@emotion/css';

const PostOptionCard = () => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '450px',
        gap: '1rem',
      })}
    >
      <div
        className={css({
          fontFamily: 'SpoqaHanSansNeo-Medium',
          fontSize: '2rem',
        })}
      >
        커피
      </div>
      <div>
        <img
          className={css({
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
        className={css({
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
