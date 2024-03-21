import React from 'react';
import { PATH } from '@/constants/path';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        css={css({
          fontFamily: 'SpoqaHanSansNeo-medium',
          color: 'white',
          cursor: 'pointer',
        })}
        type="button"
        onClick={() => {
          navigate(`/${PATH.LOGIN}`);
        }}
      >
        로그인
      </button>
      <button
        css={css({
          fontFamily: 'SpoqaHanSansNeo-medium',
          color: 'white',
          cursor: 'pointer',
        })}
        type="button"
        onClick={() => {
          navigate(`/${PATH.SIGN_UP}`);
        }}
      >
        회원가입
      </button>
    </>
  );
};

export default Logout;
