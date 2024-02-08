import React from 'react';
import { css } from '@emotion/css';
import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';
import Input from '../../components/Input/Input';
import {
  container,
  inputButtonContainer,
  inputContainer,
  loginContainer,
} from './SignUpPage.style';

const SignUpPage = () => {
  const isError: boolean = true;
  return (
    <div className={container}>
      <div className={loginContainer}>
        <Heading size="large">SIGN UP</Heading>

        <div className={inputContainer}>
          <div className={inputButtonContainer}>
            <Input
              placeholder="이메일을 입력해주세요."
              size="medium"
              label="이메일"
              isError={isError}
              errorMessage={isError ? '이미 존재하는 이메일입니다.' : undefined}
            />
            <Button css={css({ width: '100%' })}>인증</Button>
          </div>
          <div className={inputButtonContainer}>
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
          <div className={inputButtonContainer}>
            <Input
              placeholder="닉네임을 입력해주세요 (양식)"
              size="medium"
              label="닉네임"
              isError={isError}
              errorMessage={isError ? '이미 존재하는 닉네임입니다.' : undefined}
            />
            <Button css={css({ width: '100%' })}>중복 확인</Button>
          </div>

          <Input
            placeholder="비밀번호를 입력해주세요. (영문+숫자 10-20자)"
            size="medium"
            label="비밀번호"
            isError={isError}
            errorMessage={
              isError ? '양식에 맞는 비밀번호를 입력해주세요.' : undefined
            }
          />
          <Input
            placeholder="비밀번호를 재입력해주세요."
            size="medium"
            label="비밀번호 확인"
            isError={isError}
            errorMessage={isError ? '비밀번호가 일치하지 않습니다.' : undefined}
          />
        </div>
        <Button css={css({ width: '100%' })}>회원가입</Button>
        <Button variant="cancel" css={css({ width: '100%' })}>
          취소
        </Button>
      </div>
    </div>
  );
};

export default SignUpPage;
