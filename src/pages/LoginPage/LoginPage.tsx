import React from 'react';
import Divider from '../../components/common/Divider';
import Heading from '../../components/design/Heading/Heading';
import { PATH } from '../../constants/path';
import { linkContainer, loginContainer } from './LoginPage.style';
import LoginForm from './sections/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div css={loginContainer}>
      <Heading size="large">LOGIN</Heading>
      <LoginForm />
      <div css={linkContainer}>
        <a href={PATH.SIGN_UP}>회원가입</a>
        <Divider />
        <a href={PATH.PW}>비밀번호 찾기</a>
      </div>
    </div>
  );
};

export default LoginPage;
