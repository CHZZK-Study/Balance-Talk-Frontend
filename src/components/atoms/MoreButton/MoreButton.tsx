import React, { forwardRef, ComponentPropsWithRef, ForwardedRef } from 'react';
import { More } from '@/assets';
import * as S from './MoreButton.style';

export interface MoreButtonProps extends ComponentPropsWithRef<'button'> {}

const MoreButton = (
  { ...props }: MoreButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  return (
    <button type="button" ref={ref} css={S.moreButtonStyling} {...props}>
      더보기
      <More />
    </button>
  );
};

export default forwardRef(MoreButton);
