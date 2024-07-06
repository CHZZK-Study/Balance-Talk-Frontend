import { useQuery } from '@tanstack/react-query';
import { getTodayTalkPick } from '@/api/talk-pick';
import { TalkPickProps } from '@/types/talk-pick';
import { Pageable } from '@/types/pagination';

export const useTodayTalkPickQuery = (pageable: Pageable) => {
  const { data: todayTalkPick } = useQuery<TalkPickProps>({
    queryKey: ['talkPick', pageable.page],
    queryFn: () => getTodayTalkPick(pageable),
  });
  return { todayTalkPick };
};
