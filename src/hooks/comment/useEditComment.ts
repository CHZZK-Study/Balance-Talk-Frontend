import React, { SetStateAction, useRef } from 'react';
import { editComment } from '@/api/comments/comments';
import { CommentsPagination, EditedComment, Comment } from '@/types/comment';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useEditComment = ({
  postId,
  commentId,
  selectedOptionId,
  handleActiveEdit,
  value,
}: {
  postId: number;
  selectedOptionId: number;
  commentId: number;
  value: string;
  handleActiveEdit: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const queryClient = useQueryClient();

  const { mutate: editCommentMutate } = useMutation({
    mutationFn: (data: EditedComment) =>
      editComment(postId, commentId, { ...data }),
    onMutate: () => {
      const prevCommentsPagination: CommentsPagination | undefined =
        queryClient.getQueryData(['posts', 'comments', postId]);

      const newComments = prevCommentsPagination?.content.map(
        (comment: Comment) => {
          return comment.id === commentId
            ? { ...comment, content: value }
            : comment;
        },
      );

      queryClient.setQueryData(['posts', 'comments', postId], {
        ...prevCommentsPagination,
        content: newComments,
      });

      return { prevCommentsPagination };
    },
    onError: (error, id, context) => {
      queryClient.setQueryData(
        ['posts', 'comments', postId],
        context?.prevCommentsPagination,
      );
    },
  });

  const handleEditComment = () => {
    handleActiveEdit(false);
    editCommentMutate({ content: value, selectedOptionId });
  };
  return { inputRef, handleEditComment };
};
