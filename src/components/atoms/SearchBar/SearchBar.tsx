import React, {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
} from 'react';
import { Search } from '@/assets';
import Button from '@/components/atoms/Button/Button';
import * as S from './SearchBar.style';

export interface SearchBarProps extends ComponentPropsWithoutRef<'input'> {}

const SearchBar = (
  { ...props }: SearchBarProps,
  ref: ForwardedRef<HTMLInputElement>,
) => (
  <div css={S.searchBarStyling}>
    <input
      ref={ref}
      css={S.inputStyling}
      placeholder="궁금한 키워드를 입력해주세요!"
      {...props}
    />
    <Button size="large" variant="circle">
      <Search />
    </Button>
  </div>
);

export default forwardRef(SearchBar);
