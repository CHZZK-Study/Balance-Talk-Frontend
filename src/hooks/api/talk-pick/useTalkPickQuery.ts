import { useQuery } from '@tanstack/react-query';
import { getTalkPick } from '@/api/talk-pick';
import { Id } from '@/types/api';
import { TalkPickDetail } from '@/types/talk-pick';

export const useTalkPickQuery = (talkPickId: Id) => {
  const { data: talkPick } = useQuery<TalkPickDetail>({
    queryKey: ['talkPick', talkPickId],
    queryFn: () => getTalkPick(talkPickId),
  });
  return { talkPick };
};
