import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTalkPick } from '@/api/talk-pick';
import { Id } from '@/types/api';

export const useDeleteTalkPickMutation = (talkPickId: Id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteTalkPick(talkPickId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['talkPick', talkPickId],
      });
    },
  });
};
