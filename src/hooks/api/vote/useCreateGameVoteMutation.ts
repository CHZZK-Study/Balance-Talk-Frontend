import { Id } from '@/types/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postGameVote } from '@/api/vote';
import { VoteOption } from '@/types/vote';

export const useCreateGameVoteMutation = (gameId: Id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: VoteOption) => postGameVote(gameId, data),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['gameVote', gameId],
      }),
  });
};
