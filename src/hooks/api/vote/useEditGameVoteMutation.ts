import { Id } from '@/types/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { putGameVote } from '@/api/vote';
import { VoteOption } from '@/types/vote';

export const useEditGameVoteMutation = (gameSetId: Id, gameId: Id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: VoteOption) => putGameVote(gameId, data),
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
