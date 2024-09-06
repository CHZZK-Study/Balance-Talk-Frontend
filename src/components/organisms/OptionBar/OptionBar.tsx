import React, { useState, useEffect } from 'react';
import SelectGroup, {
  SelectGroupItem,
} from '@/components/atoms/SelectGroup/SelectGroup';
import OptionSelector from '@/components/molecules/OptionSelector/OptionSelector';
import { optionSets, OptionKeys } from '@/constants/optionSets';
import * as S from './OptionBar.style';

export interface OptionBarProps {
  selectGroupItems: SelectGroupItem[];
  initialSelectedGroupValue?: OptionKeys;
  selectedOption: string;
  onGroupSelect: (value: OptionKeys) => void;
  onOptionSelect: (option: string) => void;
}
const OptionBar = ({
  selectGroupItems,
  initialSelectedGroupValue = OptionKeys.TALK_PICK,
  selectedOption,
  onGroupSelect,
  onOptionSelect,
}: OptionBarProps) => {
  const [selectedGroup, setSelectedGroup] = useState<OptionKeys>(
    initialSelectedGroupValue,
  );
  const [options, setOptions] = useState<string[]>(optionSets[selectedGroup]);

  useEffect(() => {
    setOptions(optionSets[selectedGroup]);
  }, [selectedGroup]);

  const handleGroupSelect = (value: string) => {
    setSelectedGroup(value as OptionKeys);
    onGroupSelect(value as OptionKeys);
  };

  const handleOptionSelect = (option: string) => {
    onOptionSelect(option);
  };

  return (
    <div css={S.container}>
      <SelectGroup
        items={selectGroupItems}
        selectedValue={selectedGroup}
        onSelect={handleGroupSelect}
      />
      <OptionSelector
        options={options}
        selectedOption={selectedOption}
        onSelect={handleOptionSelect}
      />
    </div>
  );
};

export default OptionBar;
