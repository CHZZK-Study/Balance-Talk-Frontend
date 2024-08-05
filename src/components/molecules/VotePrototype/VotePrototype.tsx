import React, { useState, useEffect } from 'react';
import Button from '@/components/atoms/Button/Button';
import VoteBar from '@/components/atoms/VoteBar/VoteBar';
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
  const [leftVotes, setLeftVotes] = useState<number>(initialLeftVotes);
  const [rightVotes, setRightVotes] = useState<number>(initialRightVotes);

  useEffect(() => {
    setLeftVotes(initialLeftVotes);
    setRightVotes(initialRightVotes);
  }, [initialLeftVotes, initialRightVotes]);

  const totalVotes: number = leftVotes + rightVotes;
  const leftPercentage: string = ((leftVotes / totalVotes) * 100).toFixed(1);
  const rightPercentage: string = ((rightVotes / totalVotes) * 100).toFixed(1);

  const [selectedBar, setSelectedBar] = useState<'A' | 'B' | null>(
    selectedVote,
  );
  const [selectedButton, setSelectedButton] = useState<'A' | 'B' | null>(
    selectedVote,
  );

  const increaseVotes = (side: 'A' | 'B') => {
    if (side === 'A') {
      setLeftVotes((prev) => prev + 1);
    } else if (side === 'B') {
      setRightVotes((prev) => prev + 1);
    }
  };

  const decreaseVotes = (side: 'A' | 'B') => {
    if (side === 'A') {
      setRightVotes((prev) => Math.max(prev - 1, 0));
    } else if (side === 'B') {
      setLeftVotes((prev) => Math.max(prev - 1, 0));
    }
  };

  const updateVoteNumber = (side: 'A' | 'B') => {
    if (selectedBar === side) return;

    if (selectedBar === null) {
      increaseVotes(side);
    } else {
      increaseVotes(side);
      decreaseVotes(side);
    }
  };

  const handleButtonClick = (side: 'A' | 'B') => {
    updateVoteNumber(side);
    setSelectedBar(side);
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
