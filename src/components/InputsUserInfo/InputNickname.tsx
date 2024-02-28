import React from 'react';
import { css } from '@emotion/react';
import Input from '../design/Input/Input';
import Button from '../design/Button/Button';
import { ERROR } from '../../constants/message';

const InputNickname = () => {
  const isError: boolean = true;
  return (
    <Input
      placeholder="닉네임을 입력해주세요."
      size="medium"
      label="닉네임"
      isError={isError}
      errorMessage={isError ? ERROR.NICKNAME.EXIST : undefined}
      btn={<Button>확인</Button>}
      css={css({ width: '350px' })}
    />
  );
};

export default InputNickname;
