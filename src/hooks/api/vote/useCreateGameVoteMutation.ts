import { Id } from '@/types/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postGameVoteResult } from '@/api/vote';
import { VoteOption } from '@/types/vote';

export const useCreateGameVoteMutation = (gameId: Id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: VoteOption) => postGameVoteResult(gameId, data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['gameVote', gameId],
      });
    },
  });
};
