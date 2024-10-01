import { putComment } from '@/api/comments';
import { Id } from '@/types/api';
import { EditCommentProps } from '@/types/comment';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useEditCommentMutation = (
  talkPickId: Id,
  commentId: Id,
  setEditCommentClicked: (value: boolean) => void,
) => {
  const queryClient = useQueryClient();
  const editCommentMutation = useMutation({
    mutationFn: (comment: EditCommentProps) =>
      putComment(talkPickId, commentId, { ...comment }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['talks', talkPickId],
      });
      setEditCommentClicked(false);
    },
  });
  return editCommentMutation;
};
