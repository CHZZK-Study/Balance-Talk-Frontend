import React from 'react';
import Button from '../../components/design/Button/Button';
import Heading from '../../components/design/Heading/Heading';
import InputCode from '../../components/common/InputsUserInfo/InputCode';
import InputEmail from '../../components/common/InputsUserInfo/InputEmail';
import InputNickname from '../../components/common/InputsUserInfo/InputNickname';
import InputPw from '../../components/common/InputsUserInfo/InputPw';
import InputPwCheck from '../../components/common/InputsUserInfo/InputPwCheck';
import {
  btnContainer,
  btnSignup,
  inputContainer,
  signupContainer,
} from './SignUpPage.style';
import InputProfileImage from '../../components/common/InputsUserInfo/InputProfileImage/InputProfileImage';

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
