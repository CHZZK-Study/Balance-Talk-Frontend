import { useQuery } from '@tanstack/react-query';
import { Id } from '@/types/api';
import { GameSet } from '@/types/game';
import { getGameBySetId } from '@/api/game';

export const useGameBySetId = (gameSetId: Id) => {
  const { data: game } = useQuery<GameSet>({
    queryKey: ['games', gameSetId],
    queryFn: () => getGameBySetId(gameSetId),
  });
  return { game };
};
