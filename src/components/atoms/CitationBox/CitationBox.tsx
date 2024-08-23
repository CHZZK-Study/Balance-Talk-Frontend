import React, { forwardRef } from 'react';
import type { ForwardedRef } from 'react';
import * as S from './CitationBox.style';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CitationBox = (props: any, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <div css={S.boxStyle}>
      <div css={S.boxTitleStyle}>출처</div>
      <input css={S.inputStyle} type="text" ref={ref} {...props} />
    </div>
  );
};

export default forwardRef(CitationBox);
