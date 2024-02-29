import React from 'react';
import { css } from '@emotion/react';
import Input from '../../design/Input/Input';
import Button from '../../design/Button/Button';
import { useCheckNickname } from '../../../hooks/useCheckNickname';

interface InputNicknameProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputNickname = ({ value, onChange }: InputNicknameProps) => {
  const { inputRef, isError, errorMessage, handleBlur } =
    useCheckNickname(value);

  return (
    <Input
      name="nickname"
      placeholder="닉네임을 입력해주세요."
      size="medium"
      label="닉네임"
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

export default InputNickname;
