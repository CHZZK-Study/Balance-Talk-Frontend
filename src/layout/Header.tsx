import React from 'react';
import { css } from '@emotion/react';
import Heart from '../assets/svg/Heart';

const Header = () => {
  return (
    <div
      css={css({
        display: 'grid',
        gridTemplateColumns: `repeat(3, 1fr)`,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100vw',
        background: '#222831',
        height: 'auto',
        textAlign: 'center',
        padding: '1rem',
      })}
    >
      <div
        css={css({
          display: 'flex',
        })}
      >
        {/* 로고가 들어갈 부분 */}
        <Heart />
      </div>
      <div
        css={css({
          fontSize: '1.5rem',
          fontFamily: 'SpoqaHanSansNeo-medium',
          textAlign: 'center',
          color: 'white',
        })}
      >
        BlanceTalk
      </div>
      <div
        css={css({
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '1rem',
          fontSize: '1rem',
          fontFamily: 'SpoqaHanSansNeo-medium',
        })}
      >
        <button
          css={css({
            fontFamily: 'SpoqaHanSansNeo-medium',
            color: 'white',
          })}
          type="button"
        >
          로그인
        </button>
        <button
          css={css({
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
