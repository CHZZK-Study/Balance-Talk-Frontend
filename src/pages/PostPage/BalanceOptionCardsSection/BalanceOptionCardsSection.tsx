import React from 'react';
import { useSelectedOptionsInLocalStorage } from '@/hooks/vote/useSelectedOptionsInLocalStorage';
import { selectAccessToken } from '@/store/auth';
import { useNewSelector } from '@/store';
import { useMemberQuery } from '@/hooks/api/useMemberQuery';
import { useParseJwt } from '@/hooks/common/useParseJwt';
import { isFinished } from '@/utils/date';
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
  'id' | 'balanceOptions' | 'selectedOptionId' | 'category' | 'deadline'
>;
const BalanceOptionCardsSection = ({
  id,
  balanceOptions,
  selectedOptionId,
  category,
  deadline,
}: BalanceOptionCardsSectionProps) => {
  const { member } = useMemberQuery(
    useParseJwt(useNewSelector(selectAccessToken)).memberId,
  );
  // const member = { memberId: 103, nickname: '김성현' };

  const { getSelectedOptionId } = useSelectedOptionsInLocalStorage();

  const selectedOptionIdByPost: number | null | undefined = member
    ? selectedOptionId
    : getSelectedOptionId(id);

  return (
    <div css={balanceOptionCardsSectionWrapper}>
      <div css={balanceOptionCardsWrapper}>
        <BalanceOptionCard
          postId={id}
          {...balanceOptions[0]}
          balanceOptionId={balanceOptions[0].balanceOptionId || 1}
          isChecked={
            balanceOptions[0].balanceOptionId
              ? balanceOptions[0].balanceOptionId === selectedOptionIdByPost
              : selectedOptionIdByPost === 1
          }
          isVoted={selectedOptionIdByPost !== null}
          title={balanceOptions[0].title}
          category={category}
          deadline={deadline}
        />
        <div css={versusTextwrapper}>VS</div>
        <BalanceOptionCard
          postId={id}
          {...balanceOptions[1]}
          balanceOptionId={balanceOptions[1].balanceOptionId || 2}
          isChecked={
            balanceOptions[1].balanceOptionId
              ? balanceOptions[1].balanceOptionId === selectedOptionIdByPost
              : selectedOptionIdByPost === 2
          }
          isVoted={selectedOptionIdByPost !== null}
          title={balanceOptions[1].title}
          category={category}
          deadline={deadline}
        />
      </div>
      {(selectedOptionIdByPost || isFinished(deadline)) && (
        <ResultSection postId={id} />
      )}
    </div>
  );
};

export default BalanceOptionCardsSection;
