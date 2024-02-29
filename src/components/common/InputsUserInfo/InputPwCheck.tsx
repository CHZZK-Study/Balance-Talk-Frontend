import React from 'react';
import { css } from '@emotion/react';
import Input from '../../design/Input/Input';
import { useCheckPasswordCheck } from '../../../hooks/useCheckPasswordCheck';

interface InputPwCheckProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  pw: string;
}

const InputPwCheck = ({ value, onChange, pw }: InputPwCheckProps) => {
  const { inputRef, isError, errorMessage, handleBlur } = useCheckPasswordCheck(
    { value, pw },
  );
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
      onBlur={handleBlur}
      css={css({ width: '420px' })}
    />
  );
};

export default InputPwCheck;
