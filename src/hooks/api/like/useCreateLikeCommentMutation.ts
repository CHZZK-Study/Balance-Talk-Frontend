import { Id } from '@/types/api';
import { postLikeComment } from '@/api/like';
import { Comment, CommentsCategory, CommentsPagination } from '@/types/comment';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateLikeCommentMutation = (
  talkPickId: Id,
  commentId: Id,
  commentsCategory: CommentsCategory,
) => {
  const queryClient = useQueryClient();
  const likeCommentMutation = useMutation({
    mutationFn: () => postLikeComment(talkPickId, commentId),
    onMutate: () => {
      const prevComments: CommentsPagination | undefined =
        queryClient.getQueryData(['talks', talkPickId, commentsCategory]);

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

      queryClient.setQueryData(['talks', talkPickId, commentsCategory], {
        ...prevComments,
        content: newComments,
      });

      return { prevComments };
    },
    onError: (error, id, context) => {
      queryClient.setQueryData(
        ['talks', talkPickId, commentsCategory],
        context?.prevComments,
      );
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['talks', talkPickId, commentsCategory],
      });
    },
  });
  return likeCommentMutation;
};
