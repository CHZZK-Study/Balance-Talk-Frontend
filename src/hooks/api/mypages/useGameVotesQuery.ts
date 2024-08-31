import { useQuery } from '@tanstack/react-query';
import { getGameVote } from '@/api/mypages';
import { GameVote } from '@/types/mypages';

export const useGameVotesQuery = () => {
  const { data: gameVote } = useQuery<GameVote>({
    queryKey: ['gameVote'],
    queryFn: getGameVote,
  });

  return { gameVote };
};
