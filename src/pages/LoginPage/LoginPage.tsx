import React from 'react';
import { css } from '@emotion/react';
import Email from '../../assets/svg/Email';
import Key from '../../assets/svg/Key';
import Button from '../../components/common/Button/Button';
import Heading from '../../components/common/Heading/Heading';
import Input from '../../components/common/Input/Input';
import { PATH } from '../../constants/path';
import {
  btnLogin,
  divider,
  inputContainer,
  linkContainer,
  loginContainer,
} from './LoginPage.style';

const LoginPage = () => {
  const isError: boolean = true;
  return (
    <div css={loginContainer}>
      <Heading size="large">LOGIN</Heading>

      <div css={inputContainer}>
        <Input
          placeholder="이메일"
          size="medium"
          icon={<Email />}
          css={css({ width: '400px' })}
        />
        <Input
          placeholder="비밀번호"
          size="medium"
          icon={<Key />}
          isError={isError}
          errorMessage={
            isError
              ? '이메일 또는 비밀번호가 일치하지 않습니다. 다시 확인해주세요.'
              : undefined
          }
          css={css({ width: '400px' })}
        />
        <Button size="large" css={btnLogin}>
          로그인
        </Button>
      </div>
      <div css={linkContainer}>
        <a href={PATH.SIGN_UP}>회원가입</a>
        <div css={divider}>{}</div>
        <a href={PATH.PW}>비밀번호 찾기</a>
      </div>
    </div>
  );
};

export default LoginPage;
