import React, { useState } from 'react';
import { GameOption } from '@/types/game';
import {
  BlueGameBg,
  ForestGameBg,
  GrayGameBg,
  GreenGameBg,
  PinkGameBg,
  PurpleGameBg,
} from '@/assets';
import { getRandomNumber } from '@/utils/calculator';
import BalanceGameButton from '@/components/atoms/BalanceGameButton/BalanceGameButton';
import * as S from './BalanceGameBox.style';

export interface BalanceGameBoxProps {
  options?: GameOption[];
  selectedOption?: 'A' | 'B' | null;
}

const BalanceGameBox = ({ options, selectedOption }: BalanceGameBoxProps) => {
  const gameBgArray: string[] = [
    PurpleGameBg,
    BlueGameBg,
    GrayGameBg,
    ForestGameBg,
    GreenGameBg,
    PinkGameBg,
  ];

  const getRandomImages = () => {
    const randomImageA = gameBgArray[getRandomNumber(gameBgArray.length)];
    const randomImageB = gameBgArray[getRandomNumber(gameBgArray.length)];

    return [randomImageA, randomImageB];
  };

  const [backgroundImageA, backgroundImageB] = getRandomImages();

  const [selectedButton, setSelectedButton] = useState<'A' | 'B' | null>(null);

  const handleButtonClick = (optionType: 'A' | 'B') => {
    if (selectedButton === optionType) {
      setSelectedButton(null);
    } else {
      setSelectedButton(optionType);
    }
  };

  const optionA = options?.[0];
  const optionB = options?.[1];

  return (
    <div css={[S.containerStyle, S.getOutlineStyle(selectedOption ?? null)]}>
      <BalanceGameButton
        name={optionA?.name ?? ''}
        imgUrl={optionA?.imgUrl ?? null}
        description={optionA?.description ?? ''}
        optionType={optionA?.optionType ?? 'A'}
        selectedButton={selectedOption ?? null}
        randomImage={backgroundImageA}
        onClick={handleButtonClick}
      />
      {selectedOption === null && <div css={S.letterStyle}>VS</div>}
      <BalanceGameButton
        name={optionB?.name ?? ''}
        imgUrl={optionB?.imgUrl ?? null}
        description={optionB?.description ?? ''}
        optionType={optionB?.optionType ?? 'B'}
        selectedButton={selectedOption ?? null}
        randomImage={backgroundImageB}
        onClick={handleButtonClick}
      />
    </div>
  );
};

export default BalanceGameBox;
