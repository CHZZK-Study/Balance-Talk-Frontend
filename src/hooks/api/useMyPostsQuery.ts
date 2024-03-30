import { getMyPosts } from '@/api/mypage/mypage';
import { MyPostsType } from '@/types/mypage';
import { useQuery } from '@tanstack/react-query';

export const useMyPostsQuery = (page: number) => {
  const { data: myPosts, isLoading } = useQuery<MyPostsType>({
    queryKey: ['myPosts', page],
    queryFn: () => getMyPosts(page),
  });
  return { myPosts, isLoading };
};
