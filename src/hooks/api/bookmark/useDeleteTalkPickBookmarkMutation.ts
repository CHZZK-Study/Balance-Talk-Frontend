import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Id } from '@/types/api';
import { deleteTalkPickBookmark } from '@/api/bookmarks';

export const useDeleteTalkPickBookmarkMutation = (talkPickId: Id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteTalkPickBookmark(talkPickId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['talkPick', talkPickId],
      });
    },
  });
};
