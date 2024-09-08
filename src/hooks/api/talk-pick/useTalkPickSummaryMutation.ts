import { Id } from '@/types/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postTalkPickSummary } from '@/api/talk-pick';

export const useTalkPickSummaryMutation = (talkPickId: Id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => postTalkPickSummary(talkPickId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['talkPick', talkPickId],
      });
    },
  });
};
