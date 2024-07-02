import { postComment } from '@/api/comments';
import { Id } from '@/types/api';
import { CommentsCategory, CreateCommentProps } from '@/types/comment';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateCommentMutation = (
  talkPickId: Id,
  commentsCategory: CommentsCategory,
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (comment: CreateCommentProps) =>
      postComment(talkPickId, { ...comment }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['talks', talkPickId, commentsCategory],
      });
    },
  });
};
