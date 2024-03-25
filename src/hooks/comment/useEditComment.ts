import React, { SetStateAction, useRef } from 'react';
import { editComment } from '@/api/comments/comments';
import {
  CommentsPagination,
  EditedComment,
  Comment,
  Replies,
} from '@/types/comment';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useEditComment = ({
  postId,
  commentId,
  selectedOptionId,
  handleActiveEdit,
  parentCommentId,
  value,
  selectedPageNumber,
}: {
  postId: number;
  selectedOptionId: number;
  parentCommentId: number | null;
  commentId: number;
  value: string;
  handleActiveEdit: React.Dispatch<SetStateAction<boolean>>;
  selectedPageNumber: number;
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const queryClient = useQueryClient();

  const { mutate: editCommentMutate } = useMutation({
    mutationFn: (data: EditedComment) =>
      editComment(postId, commentId, { ...data }),
    onMutate: () => {
      const prevCommentsPagination: CommentsPagination | undefined =
        queryClient.getQueryData([
          'posts',
          'comments',
          postId,
          selectedPageNumber,
        ]);

      const newComments = prevCommentsPagination?.content.map(
        (comment: Comment) => {
          return comment.id === commentId
            ? { ...comment, content: value }
            : comment;
        },
      );

      queryClient.setQueryData(
        ['posts', 'comments', postId, selectedPageNumber],
        {
          ...prevCommentsPagination,
          content: newComments,
        },
      );

      return { prevCommentsPagination };
    },
    onError: (error, id, context) => {
      queryClient.setQueryData(
        ['posts', 'comments', postId, selectedPageNumber],
        context?.prevCommentsPagination,
      );
    },
  });

  const { mutate: editRepliyMutate } = useMutation({
    mutationFn: (data: EditedComment) =>
      editComment(postId, commentId, { ...data }),
    onMutate: () => {
      const prevReplies: Replies | undefined = queryClient.getQueryData([
        'posts',
        'comments',
        postId,
        parentCommentId,
        'replies',
      ]);

      const newReplies = prevReplies?.content.map((comment: Comment) => {
        return comment.id === commentId
          ? { ...comment, content: value }
          : comment;
      });

      queryClient.setQueryData(
        ['posts', 'comments', postId, parentCommentId, 'replies'],
        {
          ...prevReplies,
          content: newReplies,
        },
      );

      return { prevReplies };
    },
    onError: (error, id, context) => {
      queryClient.setQueryData(
        ['posts', 'comments', postId, parentCommentId, 'replies'],
        context?.prevReplies,
      );
    },
  });

  const handleEditComment = () => {
    handleActiveEdit(false);
    if (parentCommentId) {
      editRepliyMutate({ content: value, selectedOptionId: null });
    } else {
      editCommentMutate({ content: value, selectedOptionId });
    }
  };
  return { inputRef, handleEditComment };
};
