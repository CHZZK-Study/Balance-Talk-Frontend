import { Id } from '@/types/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteGameVote } from '@/api/vote';

export const useDeleteGameVoteMutation = (gameId: Id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteGameVote(gameId),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['gameVote', gameId],
      }),
  });
};
