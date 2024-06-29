import { useQuery } from '@tanstack/react-query';
import { Id } from '@/types/api';
import { GameItem } from '@/types/game';
import { getGameById } from '@/api/game';

export const useGameById = (postId: Id) => {
  const { data: game, isLoading } = useQuery<GameItem>({
    queryKey: ['newGames', postId],
    queryFn: () => getGameById(postId),
  });
  return { game, isLoading };
};
