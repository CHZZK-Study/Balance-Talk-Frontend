import { createComment } from '@/api/comments';
import { CreatedComment } from '@/types/comment';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';

export const useCreateComment = ({
  postId,
  selectedOptionId,
  value,
  reset,
}: {
  postId: number;
  selectedOptionId: number;
  value: string;
  reset: () => void;
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const queryClient = useQueryClient();

  const { mutate: addCommentMutate } = useMutation({
    mutationFn: (data: CreatedComment) => createComment(postId, { ...data }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['posts', 'comments', postId],
      });
    },
  });
  const handleSubmit = () => {
    addCommentMutate({ content: value, selectedOptionId });
    reset();
  };
  return { inputRef, handleSubmit };
};
