import React from 'react';
import { TalkPickSummary } from '@/types/talk-pick';
import { Spinner } from '@/assets';
import SummaryItem from '@/components/atoms/SummaryItem/SummaryItem';
import * as S from './SummaryBox.style';

export interface SummaryBoxProps {
  summary: TalkPickSummary | undefined;
}

const SummaryBox = ({ summary }: SummaryBoxProps) => (
  <div css={S.summaryBoxStyling}>
    <div css={S.summaryTextStyling}>세 줄 요약</div>
    {summary?.summaryThirdLine === null ? (
      <div css={S.summarySpinnerWrapper}>
        <div css={S.summarySpinnerStyling}>
          <Spinner />
        </div>
        <p css={S.summarySpinnerText}>AI가 세 줄 요약을 하고 있어요!</p>
      </div>
    ) : (
      <div css={S.summaryWrapper}>
        <SummaryItem itemNumber="1">{summary?.summaryFirstLine}</SummaryItem>
        <SummaryItem itemNumber="2">{summary?.summarySecondLine}</SummaryItem>
        <SummaryItem itemNumber="3">{summary?.summaryThirdLine}</SummaryItem>
      </div>
    )}
  </div>
);

export default SummaryBox;
