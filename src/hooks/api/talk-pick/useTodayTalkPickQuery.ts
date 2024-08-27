import { useQuery } from '@tanstack/react-query';
import { getTodayTalkPick } from '@/api/talk-pick';
import { TodayTalkPick } from '@/types/talk-pick';

export const useTodayTalkPickQuery = () => {
  const { data: todayTalkPick } = useQuery<TodayTalkPick>({
    queryKey: ['todayTalkPick'],
    queryFn: getTodayTalkPick,
  });
  return { todayTalkPick };
};
