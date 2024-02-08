import React from 'react';
import { css } from '@emotion/react';
import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';
import Input from '../../components/Input/Input';
import {
  container,
  inputButtonContainer,
  inputContainer,
  loginContainer,
} from './FindPasswordPage.style';

const FindPasswordPage = () => {
  const isError: boolean = true;
  return (
    <div css={container}>
      <div css={loginContainer}>
        <Heading size="small">비밀번호를 찾을 이메일을 입력해주세요.</Heading>

        <div css={inputContainer}>
          <div css={inputButtonContainer}>
            <Input
              placeholder="이메일을 입력해주세요."
              size="medium"
              isError={isError}
              errorMessage={isError ? '존재하지 않는 이메일입니다.' : undefined}
            />
            <Button css={css({ width: '100%' })}>인증</Button>
          </div>
          <div css={inputButtonContainer}>
            <Input
              placeholder="인증번호 입력"
              size="medium"
              isError={isError}
              errorMessage={
                isError ? '인증번호가 일치하지 않습니다.' : undefined
              }
            />
            <Button css={css({ width: '100%' })}>확인</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindPasswordPage;
