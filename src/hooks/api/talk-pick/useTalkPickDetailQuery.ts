import { useQuery } from '@tanstack/react-query';
import { getTalkPickDetail } from '@/api/talk-pick';
import { Id } from '@/types/api';
import { TalkPickDetail } from '@/types/talk-pick';

export const useTalkPickDetailQuery = (talkPickId: Id) => {
  const { data: talkPick } = useQuery<TalkPickDetail>({
    queryKey: ['talkPick', talkPickId],
    queryFn: () => getTalkPickDetail(talkPickId),
  });
  return { talkPick };
};
