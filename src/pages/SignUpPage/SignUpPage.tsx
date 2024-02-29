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
import { useSignupForm } from '../../hooks/signup/useSignupForm';

const SignUpPage = () => {
  const { form, onChange } = useSignupForm();
  return (
    <div css={signupContainer}>
      <Heading size="large">SIGN UP</Heading>
      <InputProfileImage />
      <div css={inputContainer}>
        <InputEmail value={form.email} onChange={onChange} />
        <InputCode value={form.code} onChange={onChange} />
        <InputNickname value={form.nickname} onChange={onChange} />
        <InputPw value={form.password} onChange={onChange} />
        <InputPwCheck
          value={form.passwordCheck}
          onChange={onChange}
          pw={form.password}
        />
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
