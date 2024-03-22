import React from 'react';
import Heading from '../../components/design/Heading/Heading';
import InputEmail from '../../components/common/InputsUserInfo/InputEmail';
import { inputContainer, pwContainer } from './FindPasswordPage.style';
import { useFindPwForm } from '../../hooks/findPassword/useFindPwForm';

const FindPasswordPage = () => {
  const { form, onChange } = useFindPwForm();
  return (
    <div css={pwContainer}>
      <Heading size="small">비밀번호를 찾을 이메일을 입력해주세요.</Heading>
      <div css={inputContainer}>
        <InputEmail
          type="findPassword"
          value={form.email}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default FindPasswordPage;
