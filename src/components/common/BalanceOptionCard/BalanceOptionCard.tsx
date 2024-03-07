import React, { useState } from 'react';
import { css } from '@emotion/react';
import { ImageInfo } from '../../../types/post';
import coffee from '../../../../public/coffee.jpg';
import juice from '../../../../public/juice.jpg';
import {
  balanceOptionCardWrapper,
  balanceOptionTitleWrapper,
  balanceOptionImageWrapper,
  balanceOptionDescriptionWrapper,
  balanceOptionWrapper,
  backgroundWrapper,
  innerButtonWrapper,
  winnerIconWrapper,
  outerButtonWrapper,
} from './BalanceOptionCard.style';
import { Check } from '../../../assets';

export type BalanceOptionCardProps = ImageInfo & {
  isVoted: boolean;
  handleVoted: React.Dispatch<React.SetStateAction<boolean>>;
};

const BalanceOptionCard = ({
  optionImg,
  optionTitle,
  optionDescription,
  isVoted,
  handleVoted,
}: BalanceOptionCardProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <div css={balanceOptionCardWrapper}>
      <div css={css(balanceOptionTitleWrapper)}>{optionTitle}</div>
      <div css={css(balanceOptionWrapper)}>
        {isVoted && (
          <div css={css(backgroundWrapper)}>
            {isChecked && (
              <button
                css={css(outerButtonWrapper)}
                type="button"
                onClick={() => {
                  handleVoted((prev) => !prev);
                  setIsChecked(false);
                }}
              >
                <Check />
              </button>
            )}
          </div>
        )}
        <button
          css={innerButtonWrapper}
          type="button"
          onClick={() => {
            handleVoted((prev) => !prev);
            setIsChecked(true);
          }}
        >
          <div css={winnerIconWrapper} />
          <img
            css={css(balanceOptionImageWrapper)}
            src={optionImg === 'coffee.jpg' ? coffee : juice}
            alt="optionImg"
          />
        </button>
      </div>

      <div css={balanceOptionDescriptionWrapper}>{optionDescription}</div>
    </div>
  );
};

export default BalanceOptionCard;
