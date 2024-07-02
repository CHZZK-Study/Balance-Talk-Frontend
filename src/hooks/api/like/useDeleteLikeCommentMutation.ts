import { deleteLikeComment } from '@/api/like';
import { Id } from '@/types/api';
import { Comment, CommentsCategory, CommentsPagination } from '@/types/comment';
import { Pageable } from '@/types/pagination';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteLikeCommentMutation = (
  talkPickId: Id,
  commentId: Id,
  selectedPageNumber: Pick<Pageable, 'page'>,
  commentsCategory: CommentsCategory,
) => {
  const queryClient = useQueryClient();
  const deleteLikeCommentMutation = useMutation({
    mutationFn: () => deleteLikeComment(commentId),
    onMutate: () => {
      const prevComments: CommentsPagination | undefined =
        queryClient.getQueryData([
          'talks',
          talkPickId,
          commentsCategory,
          selectedPageNumber,
        ]);

      const newComments = prevComments?.content.map((comment: Comment) => {
        return comment.id === commentId
          ? {
              ...comment,
              myLike: false,
              likesCount: comment.likesCount - 1,
            }
          : comment;
      });

      queryClient.setQueryData(
        ['talks', talkPickId, commentsCategory, selectedPageNumber],
        {
          ...prevComments,
          content: newComments,
        },
      );

      return { prevComments };
    },
    onError: (error, id, context) => {
      queryClient.setQueryData(
        ['talks', talkPickId, commentsCategory, selectedPageNumber],
        context?.prevComments,
      );
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['talks', talkPickId, commentsCategory, selectedPageNumber],
      });
    },
  });
  return deleteLikeCommentMutation;
};
