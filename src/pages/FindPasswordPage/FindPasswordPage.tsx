import React from 'react';
import Heading from '../../components/common/Heading/Heading';
import InputCode from '../../components/InputsUserInfo/InputCode';
import InputEmail from '../../components/InputsUserInfo/InputEmail';
import { inputContainer, pwContainer } from './FindPasswordPage.style';

const FindPasswordPage = () => {
  return (
    <div css={pwContainer}>
      <Heading size="small">비밀번호를 찾을 이메일을 입력해주세요.</Heading>
      <div css={inputContainer}>
        <InputEmail />
        <InputCode />
      </div>
    </div>
  );
};

export default FindPasswordPage;
