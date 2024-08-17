import React from 'react';
import Heading from '../../components/common/Heading/Heading';
import InputEmail from '../../components/molecules/InputEmail/InputEmail';
import { inputContainer, pwContainer } from './FindPasswordPage.style';
import { useFindPwForm } from '../../hooks/findPassword/useFindPwForm';

const FindPasswordPage = () => {
  const { form, onChange } = useFindPwForm();
  return (
    <div css={pwContainer}>
      <Heading size="small">
        임시 비밀번호를 발급받을 이메일을 입력해주세요.
      </Heading>
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
