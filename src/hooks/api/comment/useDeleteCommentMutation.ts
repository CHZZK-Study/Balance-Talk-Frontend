import { deleteComment } from '@/api/comments';
import { Id } from '@/types/api';
import { CommentsCategory } from '@/types/comment';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteCommentMutation = (
  talkPickId: Id,
  commentsCategory: CommentsCategory,
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (commentId: Id) => deleteComment(talkPickId, commentId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['talks', talkPickId, commentsCategory],
      });
    },
  });
};
