import React, { forwardRef, useState } from 'react';
import type { ForwardedRef } from 'react';
import * as S from './OptionInputBox.style';

interface OptionInputProps {
  option?: 'A' | 'B';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const OptionInputBox = (
  { option = 'A', value, onChange }: OptionInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const [hasText, setHasText] = useState(value.trim() !== '');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasText(e.target.value.trim() !== '');
    onChange(e);
  };

  return (
    <div css={S.contentWrapStyle(hasText, option)}>
      <div css={S.optionStyle(option)}>{option === 'A' ? 'A' : 'B'}</div>
      <input
        css={S.textStyle}
        type="text"
        placeholder="항목을 입력하세요."
        ref={ref}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default forwardRef(OptionInputBox);
