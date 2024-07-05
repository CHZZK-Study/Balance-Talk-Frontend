import { getComments } from '@/api/comments';
import { Id } from '@/types/api';
import { CommentsCategory, CommentsPagination } from '@/types/comment';
import { Pageable } from '@/types/pagination';
import { useQuery } from '@tanstack/react-query';

export const useCommentsQuery = (
  talkPickId: Id,
  pageable: Pageable,
  commentsCategory: Extract<CommentsCategory, 'comments'>,
) => {
  const { data: comments } = useQuery<CommentsPagination>({
    queryKey: ['talks', talkPickId, commentsCategory, pageable.page],
    queryFn: () => getComments(talkPickId, pageable),
  });
  return { comments };
};
