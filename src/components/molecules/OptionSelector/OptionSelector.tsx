import React, { useState } from 'react';
import Button from '@/components/atoms/Button/Button';
import { OptionSelectorProps } from '@/types/molecules';
import * as S from './OptionSelector.style';

const OptionSelector = ({
  options,
  selectedOption,
  onSelect,
}: OptionSelectorProps) => {
  const [selected, setSelected] = useState(selectedOption || options[0]);

  const handleSelect = (option: string) => {
    setSelected(option);
    onSelect(option);
  };

  return (
    <div css={S.optionSelectorContainer}>
      {options.map((option) => (
        <Button
          key={option}
          variant={selected === option ? 'roundPrimary2' : 'outlinePrimary'}
          size="large"
          onClick={() => handleSelect(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

export default OptionSelector;
