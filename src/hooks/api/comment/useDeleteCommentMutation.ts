import { deleteComment } from '@/api/comments';
import { Id } from '@/types/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteCommentMutation = (talkPickId: Id, commentId: Id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteComment(talkPickId, commentId),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ['talks', talkPickId, commentId],
        }),
        queryClient.invalidateQueries({
          queryKey: ['talks', talkPickId, commentId, 'replies'],
        }),
        queryClient.invalidateQueries({
          queryKey: ['talks', talkPickId],
        }),
      ]);
    },
  });
};
