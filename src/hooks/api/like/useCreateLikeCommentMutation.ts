import { Id } from '@/types/api';
import { postLikeComment } from '@/api/like';
import { Comment, CommentsPagination } from '@/types/comment';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateLikeCommentMutation = (talkPickId: Id, commentId: Id) => {
  const queryClient = useQueryClient();
  const likeCommentMutation = useMutation({
    mutationFn: () => postLikeComment(talkPickId, commentId),
    onMutate: () => {
      const prevComments: CommentsPagination | undefined =
        queryClient.getQueryData(['talks', talkPickId]);

      if (!prevComments) return { prevComments };

      const newComments = prevComments.content.map((comment: Comment) => {
        return comment.id === commentId
          ? {
              ...comment,
              myLike: true,
              likesCount: comment.likesCount + 1,
            }
          : comment;
      });

      queryClient.setQueryData(['talks', talkPickId], {
        ...prevComments,
        content: newComments,
      });

      return { prevComments };
    },
    onError: (error, id, context) => {
      queryClient.setQueryData(['talks', talkPickId], context?.prevComments);
    },
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
  return likeCommentMutation;
};
