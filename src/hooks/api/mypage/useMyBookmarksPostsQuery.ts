import { useQuery } from '@tanstack/react-query';
import { getMyBookmarksPosts } from '@/api/mypage';
import { MyBookmarksPostsType } from '@/types/mypage';

export const useMyBookmarksPostsQuery = (page: number) => {
  const { data: myBookmarksPosts, isLoading } = useQuery<MyBookmarksPostsType>({
    queryKey: ['myBookmarksPosts', page],
    queryFn: () => getMyBookmarksPosts(page),
  });
  return { myBookmarksPosts, isLoading };
};
