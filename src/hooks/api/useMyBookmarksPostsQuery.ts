import { useQuery } from '@tanstack/react-query';
import { getMyBookmarksPosts } from '../../api/historyPosts/historyPosts';
import { MyBookmarksPostsType } from '../../types/history';

export const useMyBookmarksPostsQuery = () => {
  const { data: myBookmarksPosts } = useQuery<MyBookmarksPostsType[]>({
    queryKey: ['myBookmarksPosts'],
    // TODO: memberId 차후 수정
    queryFn: () => getMyBookmarksPosts(0),
  });
  return { myBookmarksPosts };
};
