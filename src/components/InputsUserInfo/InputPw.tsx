import React from 'react';
import { css } from '@emotion/react';
import Input from '../common/Input/Input';
import { ERROR } from '../../constants/message';

const InputPw = () => {
  const isError: boolean = true;
  return (
    <Input
      placeholder="비밀번호를 입력해주세요."
      size="medium"
      label="비밀번호"
      isError={isError}
      errorMessage={isError ? ERROR.PW.FORM : undefined}
      css={css({ width: '420px' })}
    />
  );
};

export default InputPw;
