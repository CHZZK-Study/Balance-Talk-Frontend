import React from 'react';
import { css } from '@emotion/react';
import Button from '../../design/Button/Button';
import Input from '../../design/Input/Input';
import { useCheckCode } from '../../../hooks/useCheckCode';

interface InputCodeProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputCode = ({ value, onChange }: InputCodeProps) => {
  const { inputRef, isError, errorMessage, handleBlur } = useCheckCode(value);

  return (
    <Input
      name="code"
      placeholder="인증번호 입력"
      size="medium"
      label="인증번호"
      isError={isError}
      errorMessage={errorMessage}
      value={value}
      ref={inputRef}
      onChange={onChange}
      onBlur={handleBlur}
      btn={<Button>확인</Button>}
      css={css({ width: '350px' })}
    />
  );
};

export default InputCode;
