import React from 'react';
import Button from '@/components/atoms/Button/Button';
import InputCode from '@/components/molecules/InputCode/InputCode';
import InputEmail from '@/components/molecules/InputEmail/InputEmail';
import InputNickname from '@/components/molecules/InputNickname/InputNickname';
import InputProfileImage from '@/components/molecules/InputProfileImage/InputProfileImage';
import InputPw from '@/components/molecules/InputPw/InputPw';
import InputPwCheck from '@/components/molecules/InputPwCheck/InputPwCheck';
import { useSignupForm } from '@/hooks/signup/useSignupForm';
import {
  btnContainer,
  btnSignup,
  inputContainer,
  signupContainer,
  signUpHeadingStyling,
} from './SignUpPage.style';

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
      <span css={signUpHeadingStyling}>SIGN UP</span>
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
        <Button type="submit" variant="outlinePrimary" css={btnSignup}>
          회원가입
        </Button>
        <Button
          onClick={handleCancle}
          variant="outlineSecondary"
          css={btnSignup}
        >
          취소
        </Button>
      </div>
    </form>
  );
};

export default SignUpPage;
