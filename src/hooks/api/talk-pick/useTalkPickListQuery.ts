import { useQuery } from '@tanstack/react-query';
import { getTalkPickList } from '@/api/talk-pick';
import { Pageable } from '@/types/pagination';
import { TalkPickListPagination } from '@/types/talk-pick';

export const useTalkPickListQuery = (pageable: Pageable) => {
  const { data: talkPickList } = useQuery<TalkPickListPagination>({
    queryKey: ['talkPickList', pageable.page, pageable.size, pageable.sort],
    queryFn: () => getTalkPickList(pageable),
  });
  return { talkPickList };
};
