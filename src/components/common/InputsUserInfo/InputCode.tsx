import React from 'react';
import { css } from '@emotion/react';
import Button from '../../design/Button/Button';
import Input from '../../design/Input/Input';
import { ERROR } from '../../../constants/message';

const InputCode = () => {
  const isError: boolean = true;

  return (
    <Input
      placeholder="인증번호 입력"
      size="medium"
      label="인증번호"
      isError={isError}
      errorMessage={isError ? ERROR.CODE.NOT_MATCH : undefined}
      btn={<Button>확인</Button>}
      css={css({ width: '350px' })}
    />
  );
};

export default InputCode;
