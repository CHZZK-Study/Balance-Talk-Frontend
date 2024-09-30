import { getReplies } from '@/api/comments';
import { Id } from '@/types/api';
import { CommentsPagination } from '@/types/comment';
import { Pageable } from '@/types/pagination';
import { useQuery } from '@tanstack/react-query';

export const useRepliesQuery = (
  talkPickId: Id,
  commentId: Id,
  pageable: Pageable,
) => {
  const { data: replies } = useQuery<CommentsPagination>({
    queryKey: ['talks', talkPickId, commentId, 'replies'],
    queryFn: () => getReplies(talkPickId, commentId, pageable),
  });
  return { replies };
};
