import { MemberForm } from '@/types/member';
import { css } from '@emotion/react';
import React, { ChangeEvent } from 'react';
import { useCheckCode } from '../../../hooks/common/inputsUserInfo/useCheckCode';
import Button from '../../design/Button/Button';
import Input from '../../design/Input/Input';

interface InputCodeProps {
  value: Pick<MemberForm, 'email' | 'code'>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputCode = ({ value, onChange }: InputCodeProps) => {
  const { inputRef, isError, errorMessage, handleSubmit } = useCheckCode(value);

  return (
    <Input
      name="code"
      placeholder="인증번호 입력"
      size="medium"
      label="인증번호"
      isError={isError}
      errorMessage={errorMessage}
      value={value.code}
      ref={inputRef}
      onChange={onChange}
      btn={<Button onClick={handleSubmit}>확인</Button>}
      css={css({ width: '350px' })}
    />
  );
};

export default InputCode;
