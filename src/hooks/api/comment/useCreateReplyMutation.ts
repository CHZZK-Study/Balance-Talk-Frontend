import { postReply } from '@/api/comments';
import { Id } from '@/types/api';
import { CreateReplyProps } from '@/types/comment';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateReplyMutation = (talkPickId: Id, commentId: Id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (reply: CreateReplyProps) =>
      postReply(talkPickId, commentId, { ...reply }),
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
