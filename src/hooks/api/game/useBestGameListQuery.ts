import { useQuery } from '@tanstack/react-query';
import { Pageable } from '@/types/api';
import { GamesPagination } from '@/types/game';
import { getBestGames } from '@/api/game';

export const useBestGameList = (pageable: Pageable) => {
  const { data: bestGames, isLoading } = useQuery<GamesPagination>({
    queryKey: ['bestGames', pageable],
    queryFn: () => getBestGames(pageable),
  });
  return { bestGames, isLoading };
};
