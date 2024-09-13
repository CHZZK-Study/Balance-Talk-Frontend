import { useQuery } from '@tanstack/react-query';
import { getTempTalkPick } from '@/api/talk-pick';
import { TempTalkPick } from '@/types/talk-pick';

export const useTempTalkPickQuery = () => {
  return useQuery<TempTalkPick>({
    queryKey: ['tempTalkPick'],
    queryFn: getTempTalkPick,
  });
};
