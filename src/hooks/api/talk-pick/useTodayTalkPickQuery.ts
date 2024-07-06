import { useQuery } from '@tanstack/react-query';
import { getTodayTalkPick } from '@/api/talk-pick';
import { TalkPick } from '@/types/talk-pick';
import { Pageable } from '@/types/pagination';

export const useTodayTalkPickQuery = (pageable: Pageable) => {
  const { data: todayTalkPick } = useQuery<TalkPick>({
    queryKey: ['talkPick', pageable.page],
    queryFn: () => getTodayTalkPick(pageable),
  });
  return { todayTalkPick };
};
