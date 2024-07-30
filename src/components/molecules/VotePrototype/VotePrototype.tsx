import React, { useState } from 'react';
import Button from '@/components/atoms/Button/Button';
import VoteBar from '@/components/atoms/VoteBar/VoteBar';
import {
  votePrototypeStyle,
  buttonContainerStyle,
} from './VotePrototype.style';

interface VotePrototypeProps {
  leftButtonText: string;
  rightButtonText: string;
  leftVotes: number;
  rightVotes: number;
}

const VotePrototype: React.FC<VotePrototypeProps> = ({
  leftButtonText,
  rightButtonText,
  leftVotes,
  rightVotes,
}) => {
  const totalVotes = leftVotes + rightVotes;
  const leftPercentage = ((leftVotes / totalVotes) * 100).toFixed(1);
  const rightPercentage = ((rightVotes / totalVotes) * 100).toFixed(1);

  const [selectedBar, setSelectedBar] = useState<'left' | 'right' | null>(null);

  return (
    <div css={votePrototypeStyle}>
      <div css={buttonContainerStyle}>
        <Button
          variant="outlineHighlightR"
          size="large"
          onClick={() => setSelectedBar('left')}
        >
          {leftButtonText}
        </Button>
        <Button
          variant="outlineHighlightB"
          size="large"
          onClick={() => setSelectedBar('right')}
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
