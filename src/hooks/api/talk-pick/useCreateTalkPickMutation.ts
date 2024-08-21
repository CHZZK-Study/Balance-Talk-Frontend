import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postTalkPick } from '@/api/talk-pick';
import { NewTalkPick } from '@/types/talk-pick';

export const useCreateTalkPickMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: NewTalkPick) => postTalkPick(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['talkPick'],
      });
    },
  });
};
