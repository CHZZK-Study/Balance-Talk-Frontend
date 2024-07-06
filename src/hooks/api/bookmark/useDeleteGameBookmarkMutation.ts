import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Id } from '@/types/api';
import { deleteGameBookmark } from '@/api/bookmarks';

export const useDeleteGameBookmarkMutation = (gameId: Id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteGameBookmark(gameId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['games', gameId],
      });
    },
  });
};
