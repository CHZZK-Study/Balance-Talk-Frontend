import React from 'react';
import { PATH } from '@/constants/path';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
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
          navigate(
            `/${PATH.MYPAGE}/${PATH.HISTORY.MAIN}/${PATH.HISTORY.POSTS}`,
          );
        }}
      >
        마이페이지
      </button>
      <button
        css={css({
          fontFamily: 'SpoqaHanSansNeo-medium',
          color: 'white',
          cursor: 'pointer',
        })}
        type="button"
        onClick={() => {
          navigate(`/`);
        }}
      >
        로그아웃
      </button>
    </>
  );
};

export default Login;
