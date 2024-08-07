import React from 'react';
import { TalkPickSummary } from '@/types/talk-pick';
import SummaryItem from '@/components/atoms/SummaryItem/SummaryItem';
import {
  summaryBoxStyling,
  summaryTextStyling,
  summaryWrapperStyling,
} from './SummaryBox.style';

export interface SummaryBoxProps {
  summary: TalkPickSummary;
}

const SummaryBox = ({ summary }: SummaryBoxProps) => (
  <div css={summaryBoxStyling}>
    <div css={summaryTextStyling}>세 줄 요약</div>
    <div css={summaryWrapperStyling}>
      <SummaryItem itemNumber="1">{summary.summaryFirstLine}</SummaryItem>
      <SummaryItem itemNumber="2">{summary.summarySecondLine}</SummaryItem>
      <SummaryItem itemNumber="3">{summary.summaryThirdLine}</SummaryItem>
    </div>
  </div>
);

export default SummaryBox;
