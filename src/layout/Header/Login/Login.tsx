import React from 'react';
import { PATH } from '@/constants/path';
import { useLogoutMutation } from '@/hooks/api/member/useLogoutMutation';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const logout = useLogoutMutation();

  const handleLogout = () => {
    logout.mutate();
  };
  return (
    <>
      <button
        css={css({
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
          color: 'white',
          cursor: 'pointer',
        })}
        type="button"
        onClick={handleLogout}
      >
        로그아웃
      </button>
    </>
  );
};

export default Login;
