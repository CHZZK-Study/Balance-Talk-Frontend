import { createReply } from '@/api/comments/comments';
import { CreatedReply } from '@/types/comment';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';

export const useCreateReply = ({
  postId,
  memberId,
  commentId,
  value,
  reset,
}: {
  postId: number;
  memberId: number;
  commentId: number;
  value: string;
  reset: () => void;
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const queryClient = useQueryClient();

  const { mutate: createReplyMutate } = useMutation({
    mutationFn: (data: CreatedReply) =>
      createReply(postId, commentId, { ...data }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['posts', 'comments', postId, commentId, 'replies'],
      });
    },
  });
  const handleSubmit = () => {
    createReplyMutate({ content: value, memberId, commentId });
    reset();
  };
  return { inputRef, handleSubmit };
};
