import { useQuery } from '@tanstack/react-query';
import { getMyBookmark } from '@/api/mypages';
import { MyBookmark } from '@/types/mypages';

export const useMyBookmarksQuery = () => {
  const { data: myBookmark } = useQuery<MyBookmark>({
    queryKey: ['myBookmark'],
    queryFn: getMyBookmark,
  });

  return { myBookmark };
};
