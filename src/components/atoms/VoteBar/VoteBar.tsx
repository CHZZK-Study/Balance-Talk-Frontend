import React from 'react';
import {
  barContainerStyle,
  barStyle,
  leftBarStyle,
  rightBarStyle,
  percentageStyle,
  votesContainerStyle,
  votesStyle,
} from './VoteBar.style';

interface VoteBarProps {
  leftPercentage: number;
  rightPercentage: number;
  leftVotes: number;
  rightVotes: number;
  selectedBar?: 'left' | 'right';
}

const VoteBar: React.FC<VoteBarProps> = ({
  leftPercentage,
  rightPercentage,
  leftVotes,
  rightVotes,
  selectedBar = 'left',
}) => (
  <div css={barContainerStyle}>
    <div css={barStyle}>
      <div css={leftBarStyle(leftPercentage, rightPercentage, selectedBar)}>
        <span css={percentageStyle}>{leftPercentage}%</span>
      </div>
      <div css={rightBarStyle(leftPercentage, rightPercentage, selectedBar)}>
        <span css={percentageStyle}>{rightPercentage}%</span>
      </div>
    </div>
    <div css={votesContainerStyle}>
      <div css={votesStyle}>{leftVotes}명 응답</div>
      <div css={votesStyle}>{rightVotes}명 응답</div>
    </div>
  </div>
);

export default VoteBar;
