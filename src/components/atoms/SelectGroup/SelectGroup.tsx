import React from 'react';
import {
  selectedStyling,
  selectGroupStyling,
  selectGroupItemStyling,
  itemRadius,
  bottomBarStyling,
} from './SelectGroup.style';

export type SelectGroupItem = {
  label: string;
  value: string;
};

export interface SelectGroupProps {
  items: SelectGroupItem[];
  selectedValue?: string;
  onSelect?: (value: string) => void;
}

const SelectGroup = ({ items, selectedValue, onSelect }: SelectGroupProps) => (
  <div css={selectGroupStyling}>
    {Array.isArray(items) &&
      items.length === 2 &&
      items.map((item) => (
        <button
          key={item.value}
          type="button"
          css={[
            selectGroupItemStyling,
            itemRadius,
            item.value === selectedValue && selectedStyling,
          ]}
          onClick={() => onSelect?.(item.value)}
        >
          {item.label}
        </button>
      ))}
    <div css={bottomBarStyling} />
  </div>
);

export default SelectGroup;
