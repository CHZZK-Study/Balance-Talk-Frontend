import React from 'react';
import Button from '@/components/atoms/Button/Button';
import VoteBar from '@/components/atoms/VoteBar/VoteBar';
import { useCreateTalkPickVoteMutation } from '@/hooks/api/vote/useCreateTalkPickVoteMutation';
import { useEditTalkPickVoteMutation } from '@/hooks/api/vote/useEditTalkPickVoteMutation';
import { useDeleteTalkPickVoteMutation } from '@/hooks/api/vote/useDeleteTalkPickVoteMutation';
import {
  votePrototypeStyle,
  buttonContainerStyle,
  voteTextStyle,
  getButtonStyle,
} from './VotePrototype.style';

interface VotePrototypeProps {
  talkPickId: number;
  leftButtonText: string;
  rightButtonText: string;
  leftVotes: number;
  rightVotes: number;
  selectedVote: 'A' | 'B' | null;
}

const VotePrototype: React.FC<VotePrototypeProps> = ({
  talkPickId,
  leftButtonText,
  rightButtonText,
  leftVotes,
  rightVotes,
  selectedVote,
}) => {
  const totalVotes: number = leftVotes + rightVotes;
  const leftPercentage: string = ((leftVotes / totalVotes) * 100).toFixed(1);
  const rightPercentage: string = ((rightVotes / totalVotes) * 100).toFixed(1);

  const { mutate: createTalkPickVote } =
    useCreateTalkPickVoteMutation(talkPickId);

  const { mutate: editTalkPickVote } = useEditTalkPickVoteMutation(talkPickId);

  const { mutate: deleteTalkPickVote } =
    useDeleteTalkPickVoteMutation(talkPickId);

  const handleTalkPickVote = (
    selectedOption: 'A' | 'B' | null,
    voteOption: 'A' | 'B',
  ) => {
    if (selectedOption === null) {
      createTalkPickVote(voteOption);
    } else if (selectedOption === voteOption) {
      deleteTalkPickVote();
    } else {
      editTalkPickVote(voteOption);
    }
  };

  const handleVoteButtonClick = (voteOption: 'A' | 'B') => () => {
    handleTalkPickVote(selectedVote, voteOption);
  };

  return (
    <div css={votePrototypeStyle}>
      <div css={buttonContainerStyle}>
        <Button
          variant="outlineHighlightR"
          size="large"
          onClick={handleVoteButtonClick('A')}
          css={getButtonStyle('A', selectedVote)}
        >
          {leftButtonText}
        </Button>
        <div css={voteTextStyle}>VS</div>
        <Button
          variant="outlineHighlightB"
          size="large"
          onClick={handleVoteButtonClick('B')}
          css={getButtonStyle('B', selectedVote)}
        >
          {rightButtonText}
        </Button>
      </div>
      <VoteBar
        leftPercentage={parseFloat(leftPercentage)}
        rightPercentage={parseFloat(rightPercentage)}
        leftVotes={leftVotes}
        rightVotes={rightVotes}
        selectedBar={selectedVote}
      />
    </div>
  );
};

export default VotePrototype;
