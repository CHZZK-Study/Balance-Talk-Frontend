export const increaseVotes = (
  side: 'A' | 'B',
  setLeftVotes: React.Dispatch<React.SetStateAction<number>>,
  setRightVotes: React.Dispatch<React.SetStateAction<number>>,
) => {
  if (side === 'A') {
    setLeftVotes((prev) => prev + 1);
  } else if (side === 'B') {
    setRightVotes((prev) => prev + 1);
  }
};

export const decreaseVotes = (
  side: 'A' | 'B',
  setLeftVotes: React.Dispatch<React.SetStateAction<number>>,
  setRightVotes: React.Dispatch<React.SetStateAction<number>>,
) => {
  if (side === 'A') {
    setRightVotes((prev) => Math.max(prev - 1, 0));
  } else if (side === 'B') {
    setLeftVotes((prev) => Math.max(prev - 1, 0));
  }
};

export const updateVoteNumber = (
  side: 'A' | 'B',
  selectedBar: 'A' | 'B' | null,
  setSelectedBar: React.Dispatch<React.SetStateAction<'A' | 'B' | null>>,
  setLeftVotes: React.Dispatch<React.SetStateAction<number>>,
  setRightVotes: React.Dispatch<React.SetStateAction<number>>,
) => {
  if (selectedBar === side) return;

  if (selectedBar === null) {
    increaseVotes(side, setLeftVotes, setRightVotes);
  } else {
    increaseVotes(side, setLeftVotes, setRightVotes);
    decreaseVotes(side, setLeftVotes, setRightVotes);
  }
  setSelectedBar(side);
};
