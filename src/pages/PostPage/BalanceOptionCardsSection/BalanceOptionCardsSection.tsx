import React, { useState } from 'react';
import { useAuth } from '@/hooks/login/useAuth';
import { useSelectedOptionsInLocalStorage } from '@/hooks/vote/useSelectedOptionsInLocalStorage';
import BalanceOptionCard from '../../../components/common/BalanceOptionCard/BalanceOptionCard';
import { NPost } from '../../../types/post';
import {
  balanceOptionCardsSectionWrapper,
  balanceOptionCardsWrapper,
  versusTextwrapper,
} from './BalanceOptionCardsSection.style';
import ResultSection from './ResultSection/ResultSection';

export type BalanceOptionCardsSectionProps = Pick<
  NPost,
  'id' | 'balanceOptions' | 'selectedOptionId'
>;

const BalanceOptionCardsSection = ({
  id,
  balanceOptions,
  selectedOptionId,
}: BalanceOptionCardsSectionProps) => {
  const { checkLoggedIn } = useAuth();
  const { isLoggedIn } = checkLoggedIn();

  const { getSelectedOptionId, setSelectedOptionId, clearSelectedOptions } =
    useSelectedOptionsInLocalStorage();

  const selectedOptionIdByPost: number | undefined = !isLoggedIn
    ? getSelectedOptionId(id)
    : selectedOptionId;
  // clearSelectedOptions();

  return (
    <div css={balanceOptionCardsSectionWrapper}>
      <div css={balanceOptionCardsWrapper}>
        <BalanceOptionCard
          postId={id}
          {...balanceOptions[0]}
          isChecked={
            balanceOptions[0].balanceOptionId === selectedOptionIdByPost
          }
          isVoted={selectedOptionIdByPost !== undefined}
        />
        <div css={versusTextwrapper}>VS</div>
        <BalanceOptionCard
          postId={id}
          {...balanceOptions[1]}
          isVoted={selectedOptionIdByPost !== undefined}
          isChecked={
            balanceOptions[1].balanceOptionId === selectedOptionIdByPost
          }
        />
      </div>
      {selectedOptionIdByPost && <ResultSection postId={id} />}
    </div>
  );
};

export default BalanceOptionCardsSection;
