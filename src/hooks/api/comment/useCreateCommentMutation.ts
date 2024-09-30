import { postComment } from '@/api/comments';
import { Id } from '@/types/api';
import { CreateCommentProps } from '@/types/comment';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateCommentMutation = (talkPickId: Id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (comment: CreateCommentProps) =>
      postComment(talkPickId, { ...comment }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['talks', talkPickId, 'comments'],
      });
      await queryClient.invalidateQueries({
        queryKey: ['talks', talkPickId, 'bestComments'],
      });
    },
  });
};
