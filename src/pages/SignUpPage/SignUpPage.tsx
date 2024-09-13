import React from 'react';
import Button from '@/components/atoms/Button/Button';
import ToastModal from '@/components/atoms/ToastModal/ToastModal';
import InputCode from '@/components/molecules/InputCode/InputCode';
import InputEmail from '@/components/molecules/InputEmail/InputEmail';
import InputNickname from '@/components/molecules/InputNickname/InputNickname';
import InputProfileImage from '@/components/molecules/InputProfileImage/InputProfileImage';
import InputPw from '@/components/molecules/InputPw/InputPw';
import InputPwCheck from '@/components/molecules/InputPwCheck/InputPwCheck';
import { useSignupForm } from '@/hooks/signup/useSignupForm';
import * as S from './SignUpPage.style';

const SignUpPage = () => {
  const {
    signupSuccess,
    form,
    onChange,
    onSuccessChange,
    setEach,
    handleSubmit,
    handleCancle,
  } = useSignupForm();
  return (
    <form onSubmit={handleSubmit} css={S.signupContainer}>
      {signupSuccess && (
        <div css={S.signupToastModalStyling}>
          <ToastModal bgColor="black">회원가입 완료!</ToastModal>
        </div>
      )}
      <span css={S.signUpHeadingStyling}>SIGN UP</span>
      <InputProfileImage setProfilePhoto={setEach} />
      <div css={S.inputContainer}>
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
      <div css={S.btnContainer}>
        <Button type="submit" variant="roundPrimary2" css={S.btnSignup}>
          회원가입
        </Button>
        <Button
          onClick={handleCancle}
          variant="outlineSecondary"
          css={S.btnSignup}
        >
          취소
        </Button>
      </div>
    </form>
  );
};

export default SignUpPage;
