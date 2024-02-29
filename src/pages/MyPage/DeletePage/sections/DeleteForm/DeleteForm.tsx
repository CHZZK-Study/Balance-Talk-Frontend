import { css } from '@emotion/react';
import React from 'react';
import {
  btnSignup,
  inputContainer,
} from '../../../../SignUpPage/SignUpPage.style';
import Button from '../../../../../components/design/Button/Button';
import InputPw from '../../../../../components/common/InputsUserInfo/InputPw';
import Input from '../../../../../components/design/Input/Input';
import { useUserDeleteForm } from '../../../../../hooks/mypage/userDelete/useUserDelete';

const DeleteForm = () => {
  const { form, onChange, handleSubmit } = useUserDeleteForm();

  return (
    <form onSubmit={handleSubmit} css={inputContainer}>
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
      <InputPw value={form.password} onChange={onChange} />
      <Button type="submit" size="large" css={btnSignup}>
        탈퇴
      </Button>
    </form>
  );
};

export default DeleteForm;
