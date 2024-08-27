import React from 'react';
import { SelectGroupProps } from '@/types/atoms';
import * as S from './SelectGroup.style';

const SelectGroup = ({ items, selectedValue, onSelect }: SelectGroupProps) => (
  <div css={S.selectGroupStyling}>
    {Array.isArray(items) &&
      items.length === 2 &&
      items.map((item) => (
        <button
          key={item.value}
          type="button"
          css={[
            S.selectGroupItemStyling,
            S.itemRadius,
            item.value === selectedValue && S.selectedStyling,
          ]}
          onClick={() => onSelect?.(item.value)}
        >
          {item.label}
        </button>
      ))}
    <div css={S.bottomBarStyling} />
  </div>
);

export default SelectGroup;
