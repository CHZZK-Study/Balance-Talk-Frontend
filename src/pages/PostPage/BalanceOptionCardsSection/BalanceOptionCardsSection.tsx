import React, { useState } from 'react';
import BalanceOptionCard from '../../../components/common/BalanceOptionCard/BalanceOptionCard';
import { Post } from '../../../types/post';
import {
  balanceOptionCardsSectionWrapper,
  balanceOptionCardsWrapper,
  versusTextwrapper,
} from './BalanceOptionCardsSection.style';
import ResultSection from './ResultSection/ResultSection';

export type BalanceOptionCardsSectionProps = Pick<
  Post,
  'id' | 'balanceOptions'
>;

const BalanceOptionCardsSection = ({
  id,
  balanceOptions,
}: BalanceOptionCardsSectionProps) => {
  const [isVoted, setIsVoted] = useState<boolean>(false);

  return (
    <div css={balanceOptionCardsSectionWrapper}>
      <div css={balanceOptionCardsWrapper}>
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
      {isVoted && <ResultSection postId={id} />}
    </div>
  );
};

export default BalanceOptionCardsSection;
