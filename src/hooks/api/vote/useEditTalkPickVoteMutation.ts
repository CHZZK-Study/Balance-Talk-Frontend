import { Id } from '@/types/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { putTalkPickVoteResult } from '@/api/vote';
import { VoteOption } from '@/types/vote';

export const useEditTalkPickVoteMutation = (talkPickId: Id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: VoteOption) => putTalkPickVoteResult(talkPickId, data),
    onSuccess: () =>
      Promise.all([
        queryClient.invalidateQueries({
          queryKey: ['talkPickVote', talkPickId],
        }),
        queryClient.invalidateQueries({
          queryKey: ['talkPick', talkPickId],
        }),
      ]),
  });
};
