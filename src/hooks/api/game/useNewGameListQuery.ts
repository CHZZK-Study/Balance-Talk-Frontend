import { useQuery } from '@tanstack/react-query';
import { GameContent } from '@/types/game';
import { getNewGames } from '@/api/game';

export const useNewGameList = () => {
  const { data: newGames, isLoading } = useQuery<GameContent>({
    queryKey: ['newGames'],
    queryFn: getNewGames,
  });
  return { newGames, isLoading };
};
