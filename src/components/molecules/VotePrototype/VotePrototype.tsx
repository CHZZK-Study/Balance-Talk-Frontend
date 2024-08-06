/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useState } from 'react';
import Button from '@/components/atoms/Button/Button';
import VoteBar from '@/components/atoms/VoteBar/VoteBar';
import { useUpdateVote } from '@/hooks/talk-pick/useUpdateVote';
import {
  votePrototypeStyle,
  buttonContainerStyle,
  voteTextStyle,
  getButtonStyle,
} from './VotePrototype.style';

interface VotePrototypeProps {
  leftButtonText: string;
  rightButtonText: string;
  leftVotes: number;
  rightVotes: number;
  selectedVote: 'A' | 'B' | null;
}

const VotePrototype: React.FC<VotePrototypeProps> = ({
  leftButtonText,
  rightButtonText,
  leftVotes: initialLeftVotes,
  rightVotes: initialRightVotes,
  selectedVote,
}) => {
  const { leftVotes, rightVotes, selectedBar, updateVoteNumber } =
    useUpdateVote(initialLeftVotes, initialRightVotes, selectedVote);

  const totalVotes: number = leftVotes + rightVotes;
  const leftPercentage: string = ((leftVotes / totalVotes) * 100).toFixed(1);
  const rightPercentage: string = ((rightVotes / totalVotes) * 100).toFixed(1);

  const [selectedButton, setSelectedButton] = useState<'A' | 'B' | null>(
    selectedVote,
  );

  const handleButtonClick = (side: 'A' | 'B') => {
    updateVoteNumber(side);
    setSelectedButton(side);
  };

  return (
    <div css={votePrototypeStyle}>
      <div css={buttonContainerStyle}>
        <Button
          variant="outlineHighlightR"
          size="large"
          onClick={() => handleButtonClick('A')}
          css={getButtonStyle('A', selectedButton)}
        >
          {leftButtonText}
        </Button>
        <div css={voteTextStyle}>VS</div>
        <Button
          variant="outlineHighlightB"
          size="large"
          onClick={() => handleButtonClick('B')}
          css={getButtonStyle('B', selectedButton)}
        >
          {rightButtonText}
        </Button>
      </div>
      <VoteBar
        leftPercentage={parseFloat(leftPercentage)}
        rightPercentage={parseFloat(rightPercentage)}
        leftVotes={leftVotes}
        rightVotes={rightVotes}
        selectedBar={selectedBar}
      />
    </div>
  );
};

export default VotePrototype;
