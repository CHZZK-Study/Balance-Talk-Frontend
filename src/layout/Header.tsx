import React from 'react';
import { css } from '@emotion/css';
import Heart from '../assets/svg/Heart';

const Header = () => {
  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100vw',
        background: '#222831',
        height: '3rem',
        padding: '2rem 1rem',
      })}
    >
      <div>
        {/* 로고가 들어갈 부분 */}
        <Heart />
      </div>
      <div
        className={css({
          fontSize: '1.5rem',
          fontFamily: 'SpoqaHanSansNeo-medium',
          color: 'white',
        })}
      >
        BlanceTalk
      </div>
      <div
        className={css({
          display: 'flex',
          gap: '1rem',
          fontSize: '1rem',
          fontFamily: 'SpoqaHanSansNeo-medium',
        })}
      >
        <button
          className={css({
            fontFamily: 'SpoqaHanSansNeo-medium',
            color: 'white',
          })}
          type="button"
        >
          로그인
        </button>
        <button
          className={css({
            fontFamily: 'SpoqaHanSansNeo-medium',
            color: 'white',
          })}
          type="button"
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default Header;
