import React from 'react';
import LoginForm from '@/components/molecules/LoginForm/LoginForm';
import { LogoLarge } from '@/assets';
import * as S from './LoginPage.style';

const LoginPage = () => {
  return (
    <div css={S.loginContainer}>
      <LogoLarge css={S.logoStyle} />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
