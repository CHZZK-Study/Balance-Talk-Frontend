import { Id } from '@/types/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { putTalkPick } from '@/api/talk-pick';
import { TalkPick } from '@/types/talk-pick';

export const useEditTalkPickMutation = (talkPickId: Id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: TalkPick) => putTalkPick(talkPickId, data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['talkPick', talkPickId],
      });
    },
  });
};
