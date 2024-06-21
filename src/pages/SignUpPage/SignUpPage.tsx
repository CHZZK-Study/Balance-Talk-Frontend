import React from 'react';
import Button from '../../components/common/Button/Button';
import Heading from '../../components/common/Heading/Heading';
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
  const {
    form,
    onChange,
    onSuccessChange,
    setEach,
    handleSubmit,
    handleCancle,
  } = useSignupForm();
  return (
    <form onSubmit={handleSubmit} css={signupContainer}>
      <Heading size="large">SIGN UP</Heading>
      <InputProfileImage setProfilePhoto={setEach} />
      <div css={inputContainer}>
        <InputEmail
          type="signup"
          value={form.email}
          onChange={onChange}
          onSuccessChange={onSuccessChange}
        />
        <InputCode
          value={{ verificationCode: form.verificationCode, email: form.email }}
          onChange={onChange}
          onSuccessChange={onSuccessChange}
        />
        <InputNickname
          value={form.nickname}
          onChange={onChange}
          onSuccessChange={onSuccessChange}
        />
        <InputPw
          value={form.password}
          onChange={onChange}
          onSuccessChange={onSuccessChange}
        />
        <InputPwCheck
          value={form.passwordCheck}
          onChange={onChange}
          onSuccessChange={onSuccessChange}
          pw={form.password}
        />
      </div>
      <div css={btnContainer}>
        <Button type="submit" size="large" css={btnSignup}>
          회원가입
        </Button>
        <Button
          onClick={handleCancle}
          variant="cancel"
          size="large"
          css={btnSignup}
        >
          취소
        </Button>
      </div>
    </form>
  );
};

export default SignUpPage;
