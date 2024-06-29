import { useQuery } from '@tanstack/react-query';
import { TodayContent } from '@/types/game';
import { getTodayGame } from '@/api/game';

export const useTodayGame = () => {
  const { data: todayGame, isLoading } = useQuery<TodayContent>({
    queryKey: ['todayGame'],
    queryFn: getTodayGame,
  });
  return { todayGame, isLoading };
};
