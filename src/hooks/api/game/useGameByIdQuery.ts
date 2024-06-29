import { useQuery } from '@tanstack/react-query';
import { PostId } from '@/types/type';
import { GameItem } from '@/types/game';
import { getGameById } from '@/api/game';

export const useGameById = (postId: PostId) => {
  const { data: game, isLoading } = useQuery<GameItem>({
    queryKey: ['newGames', postId],
    queryFn: () => getGameById(postId),
  });
  return { game, isLoading };
};
