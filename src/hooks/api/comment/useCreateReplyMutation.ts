import { postReply } from '@/api/comments';
import { Id } from '@/types/api';
import { CommentsCategory, CreateReplyProps } from '@/types/comment';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateReplyMutation = (
  talkPickId: Id,
  commentId: Id,
  commentsCategory: CommentsCategory,
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (reply: CreateReplyProps) =>
      postReply(talkPickId, commentId, { ...reply }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['talks', talkPickId, commentsCategory],
      });
    },
  });
};
