import React from 'react';
import Header from '@/components/organisms/Header/Header';
import LoginForm from '@/components/molecules/LoginForm/LoginForm';
import Footer from '@/components/organisms/Footer/Footer';
import { LogoLarge } from '@/assets';
import * as S from './LoginPage.style';

const LoginPage = () => {
  return (
    <div>
      <Header />
      <div css={S.loginContainer}>
        <LogoLarge css={S.logoStyle} />
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
