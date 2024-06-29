import { useQuery } from '@tanstack/react-query';
import { GameItem } from '@/types/game';
import { getNewGames } from '@/api/game';

export const useNewGameList = () => {
  const { data: newGames, isLoading } = useQuery<GameItem[]>({
    queryKey: ['newGames'],
    queryFn: getNewGames,
  });
  return { newGames, isLoading };
};
