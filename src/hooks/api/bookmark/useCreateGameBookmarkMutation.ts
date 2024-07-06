import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Id } from '@/types/api';
import { postGameBookmark } from '@/api/bookmarks';

export const useCreateGameBookmarkMutation = (gameId: Id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => postGameBookmark(gameId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['games', gameId],
      });
    },
  });
};
