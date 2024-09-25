import React, { useState } from 'react';
import {
  BalanceGameButton,
  BalanceGameButtonProps,
} from '@/components/atoms/BalanceGameButton/BalanceGameButton';
import * as S from './BalanceGameBox.style';

export interface BalanceGameBoxProps {
  values: BalanceGameButtonProps[];
}

export const BalanceGameBox = ({ values }: BalanceGameBoxProps) => {
  const [selectedButton, setSelectedButton] = useState<'A' | 'B' | null>(null);

  const handleButtonClick = (optionType: 'A' | 'B') => {
    if (selectedButton === optionType) {
      setSelectedButton(null);
    } else {
      setSelectedButton(optionType);
    }
  };

  const optionA = values[0];
  const optionB = values[1];

  return (
    <div css={S.containerStyle}>
      <BalanceGameButton
        name={optionA.name}
        imgUrl={optionA.imgUrl}
        description={optionA.description}
        optionType={optionA.optionType}
        selectedButton={selectedButton}
        onClick={handleButtonClick}
      />
      <div css={S.letterStyle}>VS</div>
      <BalanceGameButton
        name={optionB.name}
        imgUrl={optionB.imgUrl}
        description={optionB.description}
        optionType={optionB.optionType}
        selectedButton={selectedButton}
        onClick={handleButtonClick}
      />
    </div>
  );
};
