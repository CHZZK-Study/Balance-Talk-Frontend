import { putComment } from '@/api/comments';
import { Id } from '@/types/api';
import { CommentProps } from '@/types/comment';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useEditCommentMutation = (
  talkPickId: Id,
  commentId: Id,
  setEditButtonClicked: (value: boolean) => void,
) => {
  const queryClient = useQueryClient();
  const editCommentMutation = useMutation({
    mutationFn: (comment: CommentProps) =>
      putComment(talkPickId, commentId, { ...comment }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['talks', talkPickId],
      });
      setEditButtonClicked(false);
    },
  });
  return editCommentMutation;
};
