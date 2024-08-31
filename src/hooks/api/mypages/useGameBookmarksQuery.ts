import { useQuery } from '@tanstack/react-query';
import { getGameBookmark } from '@/api/mypages';
import { GameBookmark } from '@/types/mypages';

export const useGameBookmarksQuery = () => {
  const { data: gameBookmark } = useQuery<GameBookmark>({
    queryKey: ['gameBookmark'],
    queryFn: getGameBookmark,
  });

  return { gameBookmark };
};
