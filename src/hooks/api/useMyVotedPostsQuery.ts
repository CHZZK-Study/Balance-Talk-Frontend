import { getMyVotedPosts } from '@/api/mypage/mypage';
import { MyVotedPostsType } from '@/types/mypage';
import { useQuery } from '@tanstack/react-query';

export const useMyVotedPostsQuery = (page: number) => {
  const { data: myVotedPosts, isLoading } = useQuery<MyVotedPostsType>({
    queryKey: ['myVotedPosts', page],
    queryFn: () => getMyVotedPosts(page),
  });
  return { myVotedPosts, isLoading };
};
