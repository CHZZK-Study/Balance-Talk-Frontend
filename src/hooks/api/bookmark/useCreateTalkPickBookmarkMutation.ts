import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Id } from '@/types/api';
import { postTalkPickBookmark } from '@/api/bookmarks';

export const useCreateTalkPickBookmarkMutation = (talkPickId: Id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => postTalkPickBookmark(talkPickId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['talkPick', talkPickId],
      });
    },
  });
};
