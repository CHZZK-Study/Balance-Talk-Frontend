import { Id } from '@/types/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteGameVote } from '@/api/vote';

export const useDeleteGameVoteMutation = (gameSetId: Id, gameId: Id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteGameVote(gameId),
    onSuccess: () =>
      Promise.all([
        queryClient.invalidateQueries({
          queryKey: ['gameVote', gameId],
        }),
        queryClient.invalidateQueries({
          queryKey: ['gameSet', gameSetId],
        }),
      ]),
  });
};
