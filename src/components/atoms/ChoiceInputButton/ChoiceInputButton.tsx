/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { ComponentPropsWithoutRef, useEffect, useState } from 'react';
import { ChoiceMinus, ChoicePlus } from '@/assets';
import Divider from '../Divider/Divider';
import * as S from './ChoiceInputButton.style';

export interface ChoiceInputBoxProps {
  option: 'A' | 'B';
  choiceInputProps?: ComponentPropsWithoutRef<'input'>;
  infoInputProps?: ComponentPropsWithoutRef<'input'>;
}

const ChoiceInputButton = ({
  option = 'A',
  choiceInputProps,
  infoInputProps,
}: ChoiceInputBoxProps) => {
  const [infoInputClicked, setInfoButtonClicked] = useState<boolean>(false);
  const [withText, setWithText] = useState<boolean>(false);

  const [choiceInputValue, setChoiceInputValue] = useState<string>('');
  const [infoInputValue, setInfoInputValue] = useState<string>('');

  useEffect(() => {
    if (choiceInputValue.trim() || infoInputValue.trim()) {
      setWithText(true);
    } else {
      setWithText(false);
    }
  }, [choiceInputValue, infoInputValue]);

  return (
    <div
      css={[
        S.choiceInputContainer,
        withText && S.choiceInputWithText(withText, option),
      ]}
    >
      <div css={S.choiceInputWrapper}>
        <input
          type="text"
          placeholder={`${option} 선택지를 입력하세요.`}
          maxLength={30}
          css={S.choiceInputStyling}
          onChange={(e) => setChoiceInputValue(e.target.value)}
          {...choiceInputProps}
        />
        {!infoInputClicked && (
          <button type="button" onClick={() => setInfoButtonClicked(true)}>
            <ChoicePlus />
          </button>
        )}
      </div>
      {infoInputClicked && (
        <>
          <Divider orientation="width" length={534} />
          <div css={S.choiceInputWrapper}>
            <input
              type="text"
              placeholder="해당 선택지에 대해 추가로 설명을 입력할 수 있어요!"
              maxLength={50}
              css={S.choiceInputStyling}
              onChange={(e) => setInfoInputValue(e.target.value)}
              {...infoInputProps}
            />
            <button
              type="button"
              onClick={() => {
                setInfoButtonClicked(false);
                setInfoInputValue('');
              }}
            >
              <ChoiceMinus />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ChoiceInputButton;
