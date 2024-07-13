import { useQuery } from '@tanstack/react-query';
import { getGameVoteResult } from '@/api/vote';
import { VoteResult } from '@/types/vote';
import { Id } from '@/types/api';

export const useGameVoteQuery = (gameId: Id) => {
  const { data: gameVoteResult } = useQuery<VoteResult>({
    queryKey: ['gameVote', gameId],
    queryFn: () => getGameVoteResult(gameId),
  });
  return { gameVoteResult };
};
