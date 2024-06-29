import { useQuery } from '@tanstack/react-query';
import { GameProps, GamesPagination } from '@/types/game';
import { getGameList } from '@/api/game';

export const useGameList = (gameProps: GameProps) => {
  const { data: gameList, isLoading } = useQuery<GamesPagination>({
    queryKey: ['gameList', gameProps],
    queryFn: () => getGameList(gameProps),
  });
  return { gameList, isLoading };
};
