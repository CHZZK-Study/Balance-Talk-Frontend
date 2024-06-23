/* eslint-disable react-hooks/exhaustive-deps */
import { css } from '@emotion/react';
import React, { ChangeEvent, useEffect } from 'react';
import { useCheckPasswordCheck } from '../../../hooks/common/inputsUserInfo/useCheckPasswordCheck';
import Input from '../Input/Input';

interface InputPwCheckProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSuccessChange?: (name: string, value: boolean) => void;
  pw: string;
}

const InputPwCheck = ({
  value,
  onChange,
  onSuccessChange,
  pw,
}: InputPwCheckProps) => {
  const { inputRef, isError, errorMessage, handleVerify } =
    useCheckPasswordCheck({ value, pw });

  useEffect(() => {
    if (value && onSuccessChange) {
      onSuccessChange('passwordCheck', !isError);
    }
  }, [errorMessage]);

  return (
    <Input
      name="passwordCheck"
      placeholder="비밀번호를 재입력해주세요."
      size="medium"
      label="비밀번호 확인"
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

export default InputPwCheck;
