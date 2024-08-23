import React, { forwardRef, useState } from 'react';
import type { ForwardedRef } from 'react';
import * as S from './OptionInputBox.style';

interface OptionInputProps {
  option?: 'A' | 'B';
}

const OptionInputBox = (
  { option = 'A' }: OptionInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const [hasText, setHasText] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasText(e.target.value.trim() !== '');
  };

  return (
    <div css={S.contentWrapStyle(hasText, option)}>
      <div css={S.optionStyle(option)}>{option === 'A' ? 'A' : 'B'}</div>
      <input
        css={S.textStyle}
        type="text"
        placeholder="항목을 입력하세요."
        ref={ref}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default forwardRef(OptionInputBox);
