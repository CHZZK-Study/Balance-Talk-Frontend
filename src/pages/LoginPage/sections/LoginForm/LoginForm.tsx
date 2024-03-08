import React, { useRef } from 'react';
import { css } from '@emotion/react';
import Input from '../../../../components/design/Input/Input';
import { useLoginForm } from '../../../../hooks/login/useLoginForm';
import Button from '../../../../components/design/Button/Button';
import { btnLogin, inputContainer } from './LoginForm.style';
import { Email, Key } from '../../../../assets';

const LoginForm = () => {
  const inputEmailRef = useRef<HTMLInputElement | null>(null);
  const inputPwRef = useRef<HTMLInputElement | null>(null);
  const { form, onChange, isError, errorMessage, handleSubmit } =
    useLoginForm();

  return (
    <form onSubmit={handleSubmit} css={inputContainer}>
      <Input
        name="email"
        placeholder="이메일"
        size="medium"
        icon={<Email />}
        value={form.email}
        ref={inputEmailRef}
        onChange={onChange}
        css={css({ width: '400px' })}
      />
      <Input
        name="password"
        placeholder="비밀번호"
        size="medium"
        icon={<Key />}
        isError={isError}
        errorMessage={errorMessage}
        value={form.password}
        ref={inputPwRef}
        onChange={onChange}
        css={css({ width: '400px' })}
      />
      <Button type="submit" size="large" css={btnLogin}>
        로그인
      </Button>
    </form>
  );
};

export default LoginForm;
