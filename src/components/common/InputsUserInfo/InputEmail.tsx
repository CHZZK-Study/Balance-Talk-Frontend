/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, useEffect } from 'react';
import { css } from '@emotion/react';
import Button from '../Button/Button';
import Input from '../../design/Input/Input';
import { useCheckEmail } from '../../../hooks/common/inputsUserInfo/useCheckEmail';

interface InputEmailProps {
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSuccessChange?: (name: string, value: boolean) => void;
}

const InputEmail = ({
  type,
  value,
  onChange,
  onSuccessChange,
}: InputEmailProps) => {
  const { inputRef, isError, errorMessage, handleSubmit } = useCheckEmail(
    type,
    value,
  );

  useEffect(() => {
    if (value && onSuccessChange) {
      onSuccessChange('email', !isError);
    }
  }, [errorMessage]);

  return (
    <Input
      name="email"
      placeholder="이메일을 입력해주세요."
      size="medium"
      label="이메일"
      isError={isError}
      errorMessage={errorMessage}
      value={value}
      ref={inputRef}
      onChange={onChange}
      btn={
        <Button onClick={handleSubmit}>
          {type === 'signup' ? '인증' : '발송'}
        </Button>
      }
      css={css({ width: '350px' })}
    />
  );
};

export default InputEmail;
