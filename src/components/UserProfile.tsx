import React from 'react';
import { css } from '@emotion/css';

const UserProfile = () => {
  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        gap: '1.3rem',
        padding: '1rem 2rem',
      })}
    >
      <div>
        {/* 이미지 들어갈 자리 */}
        <div
          className={css({
            width: '50px',
            height: '50px',
            backgroundColor: '#D9D9D9',
            borderRadius: '50%',
          })}
        />
      </div>
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        })}
      >
        <div
          className={css({
            fontStyle: 'italic',
            fontFamily: 'SpoqaHanSansNeo-medium',
            fontWeight: '500',
            fontSize: '1rem',
          })}
        >
          Username1
        </div>
        <div
          className={css({
            fontFamily: 'SpoqaHanSansNeo-thin',
            fontSize: '1rem',
          })}
        >
          2024.02.06
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
