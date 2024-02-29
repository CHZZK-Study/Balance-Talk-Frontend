import React from 'react';
import { css } from '@emotion/react';
import Input from '../../design/Input/Input';
import { useCheckPassword } from '../../../hooks/common/inputsUserInfo/useCheckPassword';

interface InputPwProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputPw = ({ value, onChange }: InputPwProps) => {
  const { inputRef, isError, errorMessage, handleBlur } =
    useCheckPassword(value);

  return (
    <Input
      name="password"
      placeholder="비밀번호를 입력해주세요."
      size="medium"
      label="비밀번호"
      isError={isError}
      errorMessage={errorMessage}
      value={value}
      ref={inputRef}
      onChange={onChange}
      onBlur={handleBlur}
      css={css({ width: '420px' })}
    />
  );
};

export default InputPw;
