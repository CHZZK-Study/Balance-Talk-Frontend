import { postReply } from '@/api/comments';
import { Id } from '@/types/api';
import { CommentsCategory, CreateReplyProps } from '@/types/comment';
import { Pageable } from '@/types/pagination';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateReplyMutation = (
  talkPickId: Id,
  commentId: Id,
  selectedPageNumber: Pick<Pageable, 'page'>,
  commentsCategory: CommentsCategory,
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (reply: CreateReplyProps) => postReply(commentId, { ...reply }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['talks', talkPickId, commentsCategory, selectedPageNumber],
      });
    },
  });
};
