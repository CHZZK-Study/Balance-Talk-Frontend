import { useState, useEffect } from 'react';

export const useUpdateVote = (
  initialLeftVotes: number,
  initialRightVotes: number,
  selectedVote: 'A' | 'B' | null,
) => {
  const [leftVotes, setLeftVotes] = useState<number>(initialLeftVotes);
  const [rightVotes, setRightVotes] = useState<number>(initialRightVotes);
  const [selectedBar, setSelectedBar] = useState<'A' | 'B' | null>(
    selectedVote,
  );

  useEffect(() => {
    setLeftVotes(initialLeftVotes);
    setRightVotes(initialRightVotes);
  }, [initialLeftVotes, initialRightVotes]);

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
    setSelectedBar(side);
  };

  return {
    leftVotes,
    rightVotes,
    selectedBar,
    updateVoteNumber,
  };
};
