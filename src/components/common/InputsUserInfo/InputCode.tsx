/* eslint-disable react-hooks/exhaustive-deps */
import { MemberForm } from '@/types/member';
import { css } from '@emotion/react';
import React, { ChangeEvent, useEffect } from 'react';
import { useCheckCode } from '../../../hooks/common/inputsUserInfo/useCheckCode';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';

interface InputCodeProps {
  value: Pick<MemberForm, 'email' | 'verificationCode'>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSuccessChange: (name: string, value: boolean) => void;
}

const InputCode = ({ value, onChange, onSuccessChange }: InputCodeProps) => {
  const { inputRef, isError, errorMessage, handleSubmit } = useCheckCode(value);

  useEffect(() => {
    if (value.verificationCode) {
      onSuccessChange('verificationCode', !isError);
    }
  }, [errorMessage]);

  return (
    <Input
      name="verificationCode"
      placeholder="인증번호 입력"
      size="medium"
      label="인증번호"
      isError={isError}
      errorMessage={errorMessage}
      value={value.verificationCode}
      ref={inputRef}
      onChange={onChange}
      btn={<Button onClick={handleSubmit}>확인</Button>}
      css={css({ width: '350px' })}
    />
  );
};

export default InputCode;
