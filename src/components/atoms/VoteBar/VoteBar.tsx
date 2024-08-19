import React from 'react';
import { formatNumber } from '@/utils/formatData';
import * as S from './VoteBar.style';

interface VoteBarProps {
  leftPercentage: number;
  rightPercentage: number;
  leftVotes: number;
  rightVotes: number;
  selectedBar?: 'A' | 'B' | null;
}

const VoteBar: React.FC<VoteBarProps> = ({
  leftPercentage,
  rightPercentage,
  leftVotes,
  rightVotes,
  selectedBar = null,
}) => (
  <div css={S.barContainerStyle}>
    <div css={S.barStyle}>
      {selectedBar === null ? (
        <div css={S.neutralBarStyle} />
      ) : (
        <div css={S.barWrapper}>
          <div
            css={S.leftBarStyle({
              leftPercentage,
              rightPercentage,
              selectedBar,
            })}
          />
          <div
            css={S.rightBarStyle({
              leftPercentage,
              rightPercentage,
              selectedBar,
            })}
          />
          <div css={S.percentageWrapper}>
            <span css={S.percentageStyle}>{leftPercentage}%</span>
            <span css={S.percentageStyle}>{rightPercentage}%</span>
          </div>
        </div>
      )}
    </div>
    <div css={S.votesContainerStyle}>
      <div css={S.votesStyle}>{formatNumber(leftVotes)}명 응답</div>
      <div css={S.votesStyle}>{formatNumber(rightVotes)}명 응답</div>
    </div>
  </div>
);

export default VoteBar;
