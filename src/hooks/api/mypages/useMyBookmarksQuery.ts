import { useQuery } from '@tanstack/react-query';
import { getMyBookmark } from '@/api/mypages';
import { MyBookmark } from '@/types/mypages';

export const useMyBookmarksQuery = (page: number, size: number) => {
  const { data: myBookmark } = useQuery<MyBookmark>({
    queryKey: ['myBookmark', page, size],
    queryFn: () => getMyBookmark(page, size),
  });

  return { myBookmark };
};
