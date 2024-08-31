import { useQuery } from '@tanstack/react-query';
import { getMyComment } from '@/api/mypages';
import { MyComment } from '@/types/mypages';

export const useMyCommentsQuery = () => {
  const { data: myComment } = useQuery<MyComment>({
    queryKey: ['myComment'],
    queryFn: getMyComment,
  });

  return { myComment };
};
