import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Id } from '@/types/api';
import { postDoneGameBookmark } from '@/api/bookmarks';

export const useCreateDoneGameBookmarkMutation = (gameSetId: Id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => postDoneGameBookmark(gameSetId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['gameSet', gameSetId],
      });
    },
  });
};
