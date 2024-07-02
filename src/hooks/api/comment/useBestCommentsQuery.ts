import { getBestComments } from '@/api/comments';
import { Id } from '@/types/api';
import { CommentsCategory, CommentsPagination } from '@/types/comment';
import { Pageable } from '@/types/pagination';
import { useQuery } from '@tanstack/react-query';

export const useBestCommentsQuery = (
  talkPickId: Id,
  pageable: Pageable,
  commentsCategory: Extract<CommentsCategory, 'bestComments'>,
) => {
  const { data: bestComments } = useQuery<CommentsPagination>({
    queryKey: ['talks', talkPickId, commentsCategory, pageable.page],
    queryFn: () => getBestComments(talkPickId, pageable),
  });
  return { bestComments };
};
