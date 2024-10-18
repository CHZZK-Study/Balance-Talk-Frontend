import React, { forwardRef, useState } from 'react';
import type { ForwardedRef } from 'react';
import { OptionError } from '@/assets';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
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
  const [hasError, setHasError] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;

    setHasText(inputText.trim() !== '');
    setHasError(inputText.length > 10);
    onChange(e);
  };

  return (
    <div css={S.optionInputStyling}>
      <div
        css={[
          S.contentWrapStyle(hasText, option),
          isFocused && !hasText && S.getFocusStyling,
          hasError && S.getErrorStyling,
        ]}
      >
        <div css={S.optionStyle(option)}>{option === 'A' ? 'A' : 'B'}</div>
        <input
          css={S.textStyle}
          type="text"
          placeholder="항목을 입력하세요."
          ref={ref}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleInputChange}
        />
        {hasError && <OptionError />}
      </div>
      {hasError && (
        <ErrorMessage isError={hasError}>
          글자 수는 최대 10자까지 입력해주세요.
        </ErrorMessage>
      )}
    </div>
  );
};

export default forwardRef(OptionInputBox);
