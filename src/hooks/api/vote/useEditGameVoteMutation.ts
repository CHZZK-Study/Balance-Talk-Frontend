import { Id } from '@/types/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { putGameVoteResult } from '@/api/vote';
import { VoteOption } from '@/types/vote';

export const useEditGameVoteMutation = (gameId: Id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: VoteOption) => putGameVoteResult(gameId, data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['gameVote', gameId],
      });
    },
  });
};
