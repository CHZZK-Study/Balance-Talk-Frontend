import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postTalkPick } from '@/api/talk-pick';
import { TalkPick } from '@/types/talk-pick';

export const useCreateTalkPickMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: TalkPick) => postTalkPick(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['talkPick'],
      });
    },
  });
};
