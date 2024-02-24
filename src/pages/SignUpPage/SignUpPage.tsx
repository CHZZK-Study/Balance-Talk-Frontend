import React from 'react';
import Button from '../../components/common/Button/Button';
import Heading from '../../components/common/Heading/Heading';
import InputCode from '../../components/InputsUserInfo/InputCode';
import InputEmail from '../../components/InputsUserInfo/InputEmail';
import InputNickname from '../../components/InputsUserInfo/InputNickname';
import InputPw from '../../components/InputsUserInfo/InputPw';
import InputPwCheck from '../../components/InputsUserInfo/InputPwCheck';
import {
  btnContainer,
  btnSignup,
  inputContainer,
  signupContainer,
} from './SignUpPage.style';
import InputProfileImage from '../../components/InputsUserInfo/InputProfileImage/InputProfileImage';

const SignUpPage = () => {
  return (
    <div css={signupContainer}>
      <Heading size="large">SIGN UP</Heading>
      <InputProfileImage />
      <div css={inputContainer}>
        <InputEmail />
        <InputCode />
        <InputNickname />
        <InputPw />
        <InputPwCheck />
      </div>
      <div css={btnContainer}>
        <Button size="large" css={btnSignup}>
          회원가입
        </Button>
        <Button variant="cancel" size="large" css={btnSignup}>
          취소
        </Button>
      </div>
    </div>
  );
};

export default SignUpPage;
