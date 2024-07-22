import React from 'react';
import {
  selectedStyling,
  firstItemRadius,
  secondItemRadius,
  toggleButtonStyling,
  toggleButtonItemStyling,
} from './ToggleGroup.style';

export type ToggleGroupItem = {
  label: string;
  value: string;
};

export interface ToggleGroupProps {
  items?: ToggleGroupItem[];
  selectedValue?: string;
  onClick?: (value: string) => void;
}

const ToggleGroup = ({ items, selectedValue, onClick }: ToggleGroupProps) => (
  <div css={toggleButtonStyling}>
    {Array.isArray(items) &&
      items.length === 2 &&
      items.map((item, idx) => (
        <button
          type="button"
          css={[
            toggleButtonItemStyling,
            idx === 0 ? firstItemRadius : secondItemRadius,
            item.value === selectedValue && selectedStyling,
          ]}
          onClick={() => onClick?.(item.value)}
        >
          {item.label}
        </button>
      ))}
  </div>
);

export default ToggleGroup;
