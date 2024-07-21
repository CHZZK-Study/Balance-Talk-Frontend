/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/react-in-jsx-scope */
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
        <div
          key={idx}
          css={[
            toggleButtonItemStyling,
            idx === 0 ? firstItemRadius : secondItemRadius,
            item.value === selectedValue && selectedStyling,
          ]}
          onClick={() => onClick?.(item.value)}
        >
          {item.label}
        </div>
      ))}
  </div>
);

export default ToggleGroup;
