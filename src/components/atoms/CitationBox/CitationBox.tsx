import React, { forwardRef } from 'react';
import type { ComponentPropsWithRef, ForwardedRef } from 'react';
import * as S from './CitationBox.style';

interface CitationBoxProps extends ComponentPropsWithRef<'input'> {
  setSourceUrl: (url: string) => void;
}

const CitationBox = (
  { setSourceUrl, ...props }: CitationBoxProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSourceUrl(e.target.value);
  };

  return (
    <div css={S.boxStyle}>
      <div css={S.boxTitleStyle}>출처</div>
      <input
        css={S.inputStyle}
        type="text"
        ref={ref}
        onChange={handleInputChange}
        {...props}
      />
    </div>
  );
};

export default forwardRef(CitationBox);
