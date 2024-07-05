import { deleteComment } from '@/api/comments';
import { Id } from '@/types/api';
import { CommentsCategory } from '@/types/comment';
import { Pageable } from '@/types/pagination';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteCommentMutation = (
  talkPickId: Id,
  commentId: Id,
  selectedPageNumber: Pick<Pageable, 'page'>,
  commentsCategory: CommentsCategory,
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteComment(talkPickId, commentId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['talks', talkPickId, commentsCategory, selectedPageNumber],
      });
    },
  });
};
