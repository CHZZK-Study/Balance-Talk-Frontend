import { useQuery } from '@tanstack/react-query';
import { GameItem } from '@/types/game';
import { getBestGames } from '@/api/game';

export const useBestGameList = () => {
  const { data: bestGames, isLoading } = useQuery<GameItem[]>({
    queryKey: ['bestGames'],
    queryFn: getBestGames,
  });
  return { bestGames, isLoading };
};
