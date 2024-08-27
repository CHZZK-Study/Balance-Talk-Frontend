import React, { useState, useEffect } from 'react';
import SelectGroup from '@/components/atoms/SelectGroup/SelectGroup';
import OptionSelector from '@/components/molecules/OptionSelector/OptionSelector';
import { optionSets, OptionKeys } from '@/constants/optionSets';
import { SelectGroupItem } from '@/types/atoms';
import { OptionBarProps } from '@/types/organisms';
import * as S from './OptionBar.style';

const OptionBar = ({
  selectGroupItems,
  initialSelectedGroupValue = OptionKeys.TOPIC,
}: OptionBarProps) => {
  const [selectedGroup, setSelectedGroup] = useState<OptionKeys>(
    initialSelectedGroupValue,
  );
  const [options, setOptions] = useState<string[]>(optionSets[selectedGroup]);
  const [selectedOption, setSelectedOption] = useState<string>('내가 저장한');

  useEffect(() => {
    setOptions(optionSets[selectedGroup]);
    setSelectedOption(optionSets[selectedGroup][0]);
  }, [selectedGroup]);

  const handleGroupSelect = (value: string) => {
    setSelectedGroup(value as OptionKeys);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
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
