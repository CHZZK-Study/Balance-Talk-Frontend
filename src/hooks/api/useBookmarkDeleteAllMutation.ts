import { fetchDeleteBookmark } from '@/api/posts/posts';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useBookmarkDeleteAllMutation = (
  checkItems: string[],
  page: number,
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteBookmark,
    onSuccess: async () => {
      checkItems.shift();
      if (checkItems.length === 0) {
        await queryClient.invalidateQueries({
          queryKey: ['myBookmarksPosts', page],
        });
      }
    },
    onError: (err) => {
      console.error(err);
    },
  });
};
