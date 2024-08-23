import { useQuery } from '@tanstack/react-query';
import { getBestTalkPickList } from '@/api/talk-pick';
import { TalkPickListItem } from '@/types/talk-pick';

export const useBestTalkPickListQuery = () => {
  const { data: bestTalkPick } = useQuery<TalkPickListItem[]>({
    queryKey: ['bestTalkPick'],
    queryFn: getBestTalkPickList,
  });
  return { bestTalkPick };
};
