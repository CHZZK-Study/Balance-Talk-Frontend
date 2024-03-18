export type SelectedVoteInLocalStorage = {
  postId: number;
  selectedOptionId: number;
};

export const useSelectedOptionsInLocalStorage = () => {
  const getVotesInLocalstorage = (): SelectedVoteInLocalStorage[] => {
    return localStorage.getItem('votes')
      ? JSON.parse(localStorage.getItem('votes'))
      : [];
  };

  const setVotesInLocalStorage = (votes: SelectedVoteInLocalStorage[]) => {
    localStorage.setItem('votes', JSON.stringify(votes));
  };

  const getSelectedOptionId = (postId: number) => {
    const votes: SelectedVoteInLocalStorage[] = getVotesInLocalstorage();

    const selectedVote = votes?.filter(
      (vote: { postId: number; selectedOptionId: number }) =>
        vote.postId === postId,
    )[0];
    return selectedVote ? selectedVote.selectedOptionId : undefined;
  };

  const clearSelectedOptions = () => {
    localStorage.setItem('votes', JSON.stringify([]));
  };

  const setSelectedOptionId = (postId: number, selectedOptionId: number) => {
    let votes: SelectedVoteInLocalStorage[] = getVotesInLocalstorage();
    const selectedVote = votes?.filter(
      (vote: { postId: number; selectedOptionId: number }) =>
        vote.postId === postId,
    )[0];
    votes = selectedVote
      ? [
          ...votes.filter(
            (vote: { postId: number; selectedOptionId: number }) =>
              vote.postId !== postId,
          ),
          { postId, selectedOptionId },
        ]
      : [...votes, { postId, selectedOptionId }];
    setVotesInLocalStorage(votes);
  };

  return { getSelectedOptionId, setSelectedOptionId, clearSelectedOptions };
};
