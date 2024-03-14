import React, { useState } from 'react';
import { css } from '@emotion/react';
import { BalanceOption, ImageInfo } from '../../../types/post';
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
import { Check, NoImage } from '../../../assets';

export type BalanceOptionCardProps = BalanceOption & {
  isVoted: boolean;
  handleVoted: React.Dispatch<React.SetStateAction<boolean>>;
};

const BalanceOptionCard = ({
  title,
  description,
  storedFileName,
  isVoted,
  handleVoted,
}: BalanceOptionCardProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <div css={balanceOptionCardWrapper}>
      <div css={css(balanceOptionTitleWrapper)}>{title}</div>
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
            src={storedFileName === 'coffee.jpg' ? coffee : juice}
            alt="optionImg"
          />
        </button>
      </div>

      <div css={balanceOptionDescriptionWrapper}>{description}</div>
    </div>
  );
};

export default BalanceOptionCard;
