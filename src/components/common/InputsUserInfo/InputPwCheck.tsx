import React from 'react';
import { css } from '@emotion/react';
import Input from '../../design/Input/Input';
import { ERROR } from '../../../constants/message';

const InputPwCheck = () => {
  const isError: boolean = true;
  return (
    <Input
      placeholder="비밀번호를 재입력해주세요."
      size="medium"
      label="비밀번호 확인"
      isError={isError}
      errorMessage={isError ? ERROR.PW.NOT_MATCH : undefined}
      css={css({ width: '420px' })}
    />
  );
};

export default InputPwCheck;
