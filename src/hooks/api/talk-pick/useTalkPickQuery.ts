import { useQuery } from '@tanstack/react-query';
import { getTalkPick } from '@/api/talk-pick';
import { Id } from '@/types/api';
import { TalkPick } from '@/types/talk-pick';

export const useTalkPickQuery = (talkPickId: Id) => {
  const { data: talkPick } = useQuery<TalkPick>({
    queryKey: ['talkPick', talkPickId],
    queryFn: () => getTalkPick(talkPickId),
  });
  return { talkPick };
};
