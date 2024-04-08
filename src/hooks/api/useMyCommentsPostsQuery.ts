import { getMyCommentsPosts } from '@/api/mypage/mypage';
import { MyCommentsPostsType } from '@/types/mypage';
import { useQuery } from '@tanstack/react-query';

export const useMyCommentsPostsQuery = (page: number) => {
  const { data: myCommentsPosts, isLoading } = useQuery<MyCommentsPostsType>({
    queryKey: ['myBookmarksPosts', page],
    queryFn: () => getMyCommentsPosts(page),
  });
  return { myCommentsPosts, isLoading };
};
