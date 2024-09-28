import { getReplies } from '@/api/comments';
import { Id } from '@/types/api';
import { CommentsCategory, CommentsPagination } from '@/types/comment';
import { Pageable } from '@/types/pagination';
import { useQuery } from '@tanstack/react-query';

export const useCommentsQuery = (
  talkPickId: Id,
  commentId: Id,
  pageable: Pageable,
  commentsCategory: Extract<CommentsCategory, 'comments'>,
) => {
  const { data: replies } = useQuery<CommentsPagination>({
    queryKey: ['talks', talkPickId, commentsCategory, pageable.page],
    queryFn: () => getReplies(talkPickId, commentId, pageable),
  });
  return { replies };
};
