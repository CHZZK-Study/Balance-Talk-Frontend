import React from 'react';
import { css } from '@emotion/react';
import InputNickname from '../../../components/InputsUserInfo/InputNickname';
import InputProfileImage from '../../../components/InputsUserInfo/InputProfileImage/InputProfileImage';
import InputPw from '../../../components/InputsUserInfo/InputPw';
import InputPwCheck from '../../../components/InputsUserInfo/InputPwCheck';
import Button from '../../../components/common/Button/Button';
import Heading from '../../../components/common/Heading/Heading';
import Input from '../../../components/common/Input/Input';
import {
  btnContainer,
  btnSignup,
  inputContainer,
  signupContainer,
} from '../../SignUpPage/SignUpPage.style';

const UpdatePage = () => {
  return (
    <div css={signupContainer}>
      <Heading size="small">회원정보 수정</Heading>
      <InputProfileImage />
      <div css={inputContainer}>
        <Input
          placeholder="Username@gamil.com"
          disabled
          isDisabled
          size="medium"
          label="이메일"
          css={css({
            width: '420px',
          })}
        />
        <InputNickname />
        <InputPw />
        <InputPwCheck />
      </div>
      <div css={btnContainer}>
        <Button size="large" css={btnSignup}>
          회원수정
        </Button>
      </div>
    </div>
  );
};

export default UpdatePage;
