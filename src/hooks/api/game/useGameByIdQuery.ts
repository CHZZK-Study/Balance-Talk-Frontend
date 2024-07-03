import { useQuery } from '@tanstack/react-query';
import { Id } from '@/types/api';
import { GameItem } from '@/types/game';
import { getGameById } from '@/api/game';

export const useGameById = (gameId: Id) => {
  const { data: game, isLoading } = useQuery<GameItem>({
    queryKey: ['newGames', gameId],
    queryFn: () => getGameById(gameId),
  });
  return { game, isLoading };
};
