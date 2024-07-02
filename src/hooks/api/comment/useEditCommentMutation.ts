import { putComment } from '@/api/comments';
import { Id } from '@/types/api';
import {
  Comment,
  CommentsCategory,
  CommentsPagination,
  EditCommentProps,
} from '@/types/comment';
import { Pageable } from '@/types/pagination';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useEditCommentMutation = (
  talkPickId: Id,
  commentId: Id,
  selectedPageNumber: Pick<Pageable, 'page'>,
  commentsCategory: CommentsCategory,
) => {
  const queryClient = useQueryClient();
  const editCommentMutation = useMutation({
    mutationFn: (comment: EditCommentProps) =>
      putComment(talkPickId, commentId, { ...comment }),
    onMutate: (newComment) => {
      const prevComments: CommentsPagination | undefined =
        queryClient.getQueryData([
          'talks',
          talkPickId,
          commentsCategory,
          selectedPageNumber,
        ]);

      const newComments = prevComments?.content.map((comment: Comment) => {
        return comment.id === commentId ? { ...comment, newComment } : comment;
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
  return editCommentMutation;
};
