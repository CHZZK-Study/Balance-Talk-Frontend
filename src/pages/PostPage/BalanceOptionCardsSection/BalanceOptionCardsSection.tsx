import React, { useState } from 'react';
import BalanceOptionCard from '../../../components/common/BalanceOptionCard/BalanceOptionCard';
import { Post } from '../../../types/post';
import {
  balanceOptionCardsSectionWrapper,
  versusTextwrapper,
} from './BalanceOptionCardsSection.style';

export type BalanceOptionCardsSectionProps = Pick<Post, 'balanceOptions'>;

const BalanceOptionCardsSection = ({
  balanceOptions,
}: BalanceOptionCardsSectionProps) => {
  const [isVoted, setIsVoted] = useState<boolean>(false);
  return (
    <div css={balanceOptionCardsSectionWrapper}>
      <BalanceOptionCard
        {...balanceOptions[0]}
        isVoted={isVoted}
        handleVoted={setIsVoted}
      />
      <div css={versusTextwrapper}>VS</div>
      <BalanceOptionCard
        {...balanceOptions[1]}
        isVoted={isVoted}
        handleVoted={setIsVoted}
      />
    </div>
  );
};

export default BalanceOptionCardsSection;
