import React from 'react';
import { css } from '@emotion/react';
import Button from '../design/Button/Button';
import Input from '../design/Input/Input';
import { ERROR } from '../../constants/message';

const InputEmail = () => {
  const isError: boolean = true;
  return (
    <Input
      placeholder="이메일을 입력해주세요."
      size="medium"
      label="이메일"
      isError={isError}
      errorMessage={isError ? ERROR.EMAIL.FORM : undefined}
      btn={<Button>인증</Button>}
      css={css({ width: '350px' })}
    />
  );
};

export default InputEmail;
