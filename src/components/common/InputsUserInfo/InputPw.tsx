/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, useEffect } from 'react';
import { css } from '@emotion/react';
import Input from '../../design/Input/Input';
import { useCheckPassword } from '../../../hooks/common/inputsUserInfo/useCheckPassword';

interface InputPwProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSuccessChange: (name: string, value: boolean) => void;
}

const InputPw = ({ value, onChange, onSuccessChange }: InputPwProps) => {
  const { inputRef, isError, errorMessage, handleVerify } =
    useCheckPassword(value);

  useEffect(() => {
    if (value) {
      onSuccessChange('password', !isError);
    }
  }, [errorMessage]);

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
      onKeyDown={handleVerify}
      onBlur={handleVerify}
      css={css({ width: '420px' })}
    />
  );
};

export default InputPw;
