import { useQuery } from '@tanstack/react-query';
import { getGameWritten } from '@/api/mypages';
import { GameWritten } from '@/types/mypages';

export const useGameWrittensQuery = () => {
  const { data: gameWritten } = useQuery<GameWritten>({
    queryKey: ['gameWritten'],
    queryFn: getGameWritten,
  });

  return { gameWritten };
};
