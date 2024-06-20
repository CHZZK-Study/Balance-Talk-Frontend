/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, useEffect } from 'react';
import { css } from '@emotion/react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useCheckNickname } from '../../../hooks/common/inputsUserInfo/useCheckNickname';

interface InputNicknameProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSuccessChange?: (name: string, value: boolean) => void;
}

const InputNickname = ({
  value,
  onChange,
  onSuccessChange,
}: InputNicknameProps) => {
  const { inputRef, isError, errorMessage, handleSubmit } =
    useCheckNickname(value);

  useEffect(() => {
    if (value && onSuccessChange) {
      onSuccessChange('nickname', !isError);
    }
  }, [errorMessage]);

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
      btn={<Button onClick={handleSubmit}>확인</Button>}
      css={css({ width: '350px' })}
    />
  );
};

export default InputNickname;
