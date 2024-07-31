import React, { useState } from 'react';
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
  const [selectedButton, setSelectedButton] = useState<'left' | 'right' | null>(
    null,
  );

  const handleButtonClick = (side: 'left' | 'right') => {
    setSelectedBar(side);
    setSelectedButton(side);
  };

  // const getButtonStyle = (side: 'left' | 'right') => {
  //   if (selectedButton === side) {
  //     return side === 'left'
  //       ? { backgroundColor: color.RED, color: color.WT, outline: 'none' }
  //       : { backgroundColor: color.BLUE, color: color.WT, outline: 'none' };
  //   }
  //   return {};
  // };

  return (
    <div css={votePrototypeStyle}>
      <div css={buttonContainerStyle}>
        <Button
          variant="outlineHighlightR"
          size="large"
          onClick={() => handleButtonClick('left')}
          css={getButtonStyle('left', selectedButton)}
        >
          {leftButtonText}
        </Button>
        <div css={voteTextStyle}>VS</div>
        <Button
          variant="outlineHighlightB"
          size="large"
          onClick={() => handleButtonClick('right')}
          css={getButtonStyle('right', selectedButton)}
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
