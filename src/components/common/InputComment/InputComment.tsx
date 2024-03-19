/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, useEffect } from 'react';
import { css } from '@emotion/react';
import Button from '../../design/Button/Button';
import Input from '../../design/Input/Input';

interface InputEmailProps {
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputComment = ({ type, value, onChange }: InputEmailProps) => {
  return (
    <Input
      name="email"
      placeholder="이메일을 입력해주세요."
      size="medium"
      label="이메일"
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

export default InputComment;
