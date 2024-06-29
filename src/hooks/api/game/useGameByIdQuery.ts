import { useQuery } from '@tanstack/react-query';
import { GameItem } from '@/types/game';
import { getGameById } from '@/api/game';

export const useGameById = (postId: number) => {
  const { data: game, isLoading } = useQuery<GameItem>({
    queryKey: ['newGames', postId],
    queryFn: () => getGameById(postId),
  });
  return { game, isLoading };
};
